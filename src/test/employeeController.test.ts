import { Request, Response } from "express"
import * as EmployeeController from "src/api/v1/controllers/employeeController"
import * as EmployeeService from "src/api/v1/services/employeeService"

describe("Employee Controller", () => {
  let mockReq: Partial<Request>
  let mockRes: Partial<Response>
  let statusMock: jest.Mock
  let jsonMock: jest.Mock
  let sendMock: jest.Mock

  beforeEach(() => {
    jsonMock = jest.fn()
    sendMock = jest.fn()
    statusMock = jest.fn().mockReturnValue({ json: jsonMock, send: sendMock })
    mockRes = { status: statusMock, json: jsonMock, send: sendMock }
  })

  it("getEmployees - should return all employees", () => {
    mockReq = {}
    EmployeeController.getEmployees(mockReq as Request, mockRes as Response)
    expect(jsonMock).toHaveBeenCalledWith(EmployeeService.getAllEmployees())
  })

  it("getEmployee - should return an employee by id", () => {
    mockReq = { params: { id: "1" } }
    EmployeeController.getEmployee(mockReq as Request, mockRes as Response)
    expect(jsonMock).toHaveBeenCalledWith(EmployeeService.getEmployeeById(1))
  })

  it("getEmployee - should return 404 if employee not found", () => {
    mockReq = { params: { id: "9999" } }
    EmployeeController.getEmployee(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ error: "Employee not found" })
  })

  it("createEmployee - should add a new employee", () => {
    const newEmployee = { id: 999, name: "Test User", position: "Tester", department: "QA", email: "test.user@pixell-river.com", phone: "555-999-9999", branchId: 1 }
    mockReq = { body: newEmployee }
    EmployeeController.createEmployee(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(201)
    expect(jsonMock).toHaveBeenCalledWith(newEmployee)
  })

  it("updateEmployee - should update an existing employee", () => {
    const updatedData = { position: "Updated Tester" }
    EmployeeService.addEmployee({ id: 999, name: "Test User", position: "Tester", department: "QA", email: "test.user@pixell-river.com", phone: "555-999-9999", branchId: 1 })
    mockReq = { params: { id: "999" }, body: updatedData }
    EmployeeController.updateEmployee(mockReq as Request, mockRes as Response)
    expect(jsonMock).toHaveBeenCalledWith(expect.objectContaining(updatedData))
  })

  it("updateEmployee - should return 404 if employee not found", () => {
    mockReq = { params: { id: "8888" }, body: { position: "None" } }
    EmployeeController.updateEmployee(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ error: "Employee not found" })
  })

  it("deleteEmployee - should delete an existing employee", () => {
    EmployeeService.addEmployee({ id: 1000, name: "Delete Me", position: "Temp", department: "QA", email: "delete@pixell-river.com", phone: "555-000-0000", branchId: 1 })
    mockReq = { params: { id: "1000" } }
    EmployeeController.deleteEmployee(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(204)
    expect(sendMock).toHaveBeenCalled()
  })

  it("deleteEmployee - should return 404 if employee not found", () => {
    mockReq = { params: { id: "8888" } }
    EmployeeController.deleteEmployee(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ error: "Employee not found" })
  })
})
