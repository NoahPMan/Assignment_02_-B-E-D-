import { Request, Response } from "express"
import * as EmployeeService from "../services/employeeService"

export const getEmployees = (req: Request, res: Response) =>
  res.json(EmployeeService.getAllEmployees())

export const getEmployee = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const emp = EmployeeService.getEmployeeById(id)
  if (!emp) return res.status(404).json({ error: "Employee not found" })
  res.json(emp)
}

export const createEmployee = (req: Request, res: Response) =>
  res.status(201).json(EmployeeService.addEmployee(req.body))

export const updateEmployee = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const emp = EmployeeService.updateEmployee(id, req.body)
  if (!emp) return res.status(404).json({ error: "Employee not found" })
  res.json(emp)
}

export const deleteEmployee = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const success = EmployeeService.deleteEmployee(id)
  if (!success) return res.status(404).json({ error: "Employee not found" })
  res.status(204).send()
}

export const getEmployeesByBranch = (req: Request, res: Response) => {
  const branchId = parseInt(req.params.branchId)
  if (isNaN(branchId)) return res.status(400).json({ error: "Invalid branch ID" })

  const employees = EmployeeService.getEmployeesByBranch(branchId)
  res.json(employees)
}

export const getEmployeesByDepartment = (req: Request, res: Response) => {
  const department = req.params.department
  if (!department) return res.status(400).json({ error: "Department is required" })

  const employees = EmployeeService.getEmployeesByDepartment(department)
  res.json(employees)
}
