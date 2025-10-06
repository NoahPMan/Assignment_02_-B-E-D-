import * as EmployeeRepo from "../repositories/employeeRepository";
import { Employee } from "../models/employeeModel";

export const getEmployees = async (): Promise<Employee[]> => {
  return await EmployeeRepo.getAllEmployees();
};

export const getEmployee = async (id: string): Promise<Employee | null> => {
  return await EmployeeRepo.getEmployeeById(id);
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  return await EmployeeRepo.createEmployee(employee);
};

export const updateEmployee = async (id: string, employee: Partial<Employee>): Promise<Employee | null> => {
  return await EmployeeRepo.updateEmployee(id, employee);
};

export const deleteEmployee = async (id: string): Promise<boolean> => {
  return await EmployeeRepo.deleteEmployee(id);
};

export const getEmployeesByBranch = async (branchId: string): Promise<Employee[]> => {
  const all = await EmployeeRepo.getAllEmployees();
  return all.filter(emp => emp.branchId === branchId);
};

export const getEmployeesByDepartment = async (department: string): Promise<Employee[]> => {
  const all = await EmployeeRepo.getAllEmployees();
  return all.filter(emp => emp.department && emp.department.toLowerCase() === department.toLowerCase());
};
