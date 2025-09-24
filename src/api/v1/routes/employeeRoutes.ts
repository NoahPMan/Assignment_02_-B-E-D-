import { Router } from "express"
import * as EmployeeController from "../controllers/employeeController"

const router = Router()

router.get("/", EmployeeController.getEmployees)
router.get("/:id", EmployeeController.getEmployee)
router.post("/", EmployeeController.createEmployee)
router.put("/:id", EmployeeController.updateEmployee)
router.delete("/:id", EmployeeController.deleteEmployee)
router.get("/branch/:branchId", EmployeeController.getEmployeesByBranch)
router.get("/department/:department", EmployeeController.getEmployeesByDepartment)

export default router
