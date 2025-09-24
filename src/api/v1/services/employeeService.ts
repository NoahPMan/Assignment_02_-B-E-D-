import { employees, Employee } from "../../../data/employees"

export const getAllEmployees = (): Employee[] => employees

export const getEmployeeById = (id: number): Employee | undefined =>
  employees.find(e => e.id === id)

export const addEmployee = (employee: Employee): Employee => {
  employees.push(employee)
  return employee
}

export const updateEmployee = (id: number, updated: Partial<Employee>): Employee | undefined => {
  const emp = employees.find(e => e.id === id)
  if (emp) Object.assign(emp, updated)
  return emp
}

export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex(e => e.id === id)
  if (index === -1) return false
  employees.splice(index, 1)
  return true
}

export const getEmployeesByBranch = (branchId: number) => {
  return employees.filter(emp => emp.branchId === branchId)
}

export const getEmployeesByDepartment = (department: string) => {
  return employees.filter(emp => emp.department.toLowerCase() === department.toLowerCase())
}