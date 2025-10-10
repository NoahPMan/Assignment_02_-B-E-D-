import { Router } from "express";
import * as EmployeeController from "../controllers/employeeController";
import { createEmployeeSchema, updateEmployeeSchema } from "../validation/employeeValidation";
import { validate } from "../middleware/validate";

const router = Router();

router.get("/", EmployeeController.getEmployees);
router.get("/:id", EmployeeController.getEmployee);

router.post("/", validate(createEmployeeSchema), EmployeeController.createEmployee);
router.put("/:id", validate(updateEmployeeSchema), EmployeeController.updateEmployee);

router.delete("/:id", EmployeeController.deleteEmployee);
router.get("/branch/:branchId", EmployeeController.getEmployeesByBranch);
router.get("/department/:department", EmployeeController.getEmployeesByDepartment);

export default router;
