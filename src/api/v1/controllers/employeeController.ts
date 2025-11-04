import { Request, Response } from "express"
import * as EmployeeService from "../services/employeeService"

export const getEmployees = async (req: Request, res: Response) => {
  const employees = await EmployeeService.getEmployees()
  res.json(employees)
}

export const getEmployee = async (req: Request, res: Response) => {
  const id = req.params.id
  const emp = await EmployeeService.getEmployee(id)
  if (!emp) return res.status(404).json({ error: "Employee not found" })
  res.json(emp)
}

export const createEmployee = async (req: Request, res: Response) => {
  const newEmp = await EmployeeService.createEmployee(req.body)
  res.status(201).json(newEmp)
}

export const updateEmployee = async (req: Request, res: Response) => {
  const id = req.params.id
  const emp = await EmployeeService.updateEmployee(id, req.body)
  if (!emp) return res.status(404).json({ error: "Employee not found" })
  res.json(emp)
}

export const deleteEmployee = async (req: Request, res: Response) => {
  const id = req.params.id
  const success = await EmployeeService.deleteEmployee(id)
  if (!success) return res.status(404).json({ error: "Employee not found" })
  res.status(204).send()
}

export const getEmployeesByBranch = async (req: Request, res: Response) => {
  const branchId = req.params.branchId
  const employees = await EmployeeService.getEmployeesByBranch(branchId)
  res.json(employees)
}

export const getEmployeesByDepartment = async (req: Request, res: Response) => {
  const department = req.params.department
  if (!department) return res.status(400).json({ error: "Department is required" })
  const employees = await EmployeeService.getEmployeesByDepartment(department)
  res.json(employees)
}
