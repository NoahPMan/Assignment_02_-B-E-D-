import { Request, Response } from "express"
import * as BranchController from "src/api/v1/controllers/branchController"
import * as BranchService from "src/api/v1/services/branchService"

describe("Branch Controller", () => {
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

  it("getBranches - should return all branches", () => {
    jest.spyOn(BranchService, "getAllBranches").mockReturnValue([{ id: 1, name: "A", address: "", phone: "" } as any])
    BranchController.getBranches({} as Request, mockRes as Response)
    expect(jsonMock).toHaveBeenCalledWith([{ id: 1, name: "A", address: "", phone: "" }])
  })

  it("getBranch - should return branch when found", () => {
    jest.spyOn(BranchService, "getBranchById").mockReturnValue({ id: 1, name: "A", address: "", phone: "" } as any)
    mockReq = { params: { id: "1" } }
    BranchController.getBranch(mockReq as Request, mockRes as Response)
    expect(jsonMock).toHaveBeenCalledWith({ id: 1, name: "A", address: "", phone: "" })
  })

  it("getBranch - should return 404 when not found", () => {
    jest.spyOn(BranchService, "getBranchById").mockReturnValue(undefined)
    mockReq = { params: { id: "9999" } }
    BranchController.getBranch(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ error: "Branch not found" })
  })

  it("createBranch - should add a new branch", () => {
    const body = { id: 2, name: "B", address: "", phone: "" } as any
    jest.spyOn(BranchService, "addBranch").mockReturnValue(body)
    mockReq = { body }
    BranchController.createBranch(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(201)
    expect(jsonMock).toHaveBeenCalledWith(body)
  })

  it("updateBranch - should update branch when found", () => {
    const updated = { id: 1, name: "Updated" } as any
    jest.spyOn(BranchService, "updateBranch").mockReturnValue(updated)
    mockReq = { params: { id: "1" }, body: { name: "Updated" } }
    BranchController.updateBranch(mockReq as Request, mockRes as Response)
    expect(jsonMock).toHaveBeenCalledWith(updated)
  })

  it("updateBranch - should return 404 when not found", () => {
    jest.spyOn(BranchService, "updateBranch").mockReturnValue(undefined)
    mockReq = { params: { id: "8888" }, body: {} }
    BranchController.updateBranch(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ error: "Branch not found" })
  })

  it("deleteBranch - should return 204 when successful", () => {
    jest.spyOn(BranchService, "deleteBranch").mockReturnValue(true)
    mockReq = { params: { id: "1" } }
    const sendMockLocal = jest.fn()
    statusMock = jest.fn(() => ({ send: sendMockLocal }))
    mockRes = { status: statusMock as any }
    BranchController.deleteBranch(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(204)
    expect(sendMockLocal).toHaveBeenCalled()
  })

  it("deleteBranch - should return 404 when not found", () => {
    jest.spyOn(BranchService, "deleteBranch").mockReturnValue(false)
    mockReq = { params: { id: "8888" } }
    jsonMock = jest.fn()
    statusMock = jest.fn(() => ({ json: jsonMock }))
    mockRes = { status: statusMock, json: jsonMock }
    BranchController.deleteBranch(mockReq as Request, mockRes as Response)
    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ error: "Branch not found" })
  })
})
