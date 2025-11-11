import { Router } from "express";
import * as EmployeeController from "../controllers/employeeController";
import { createEmployeeSchema, updateEmployeeSchema } from "../validation/employeeValidation";
import { validate } from "../middleware/validate";

const router = Router();

/**
 * @openapi
 * /employees:
 *   get:
 *     summary: Retrieve all employees
 *     tags: [Employees]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all employees
 */
router.get("/", EmployeeController.getEmployees);

/**
 * @openapi
 * /employees/{id}:
 *   get:
 *     summary: Retrieve an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique employee ID
 *     responses:
 *       '200':
 *         description: Employee details
 *       '404':
 *         description: Employee not found
 */
router.get("/:id", EmployeeController.getEmployee);

/**
 * @openapi
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeCreate'
 *     responses:
 *       '201':
 *         description: Employee created successfully
 *       '400':
 *         description: Invalid input
 */
router.post("/", validate(createEmployeeSchema), EmployeeController.createEmployee);

/**
 * @openapi
 * /employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeUpdate'
 *     responses:
 *       '200':
 *         description: Employee updated successfully
 *       '404':
 *         description: Employee not found
 */
router.put("/:id", validate(updateEmployeeSchema), EmployeeController.updateEmployee);

/**
 * @openapi
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique employee ID
 *     responses:
 *       '204':
 *         description: Employee deleted successfully
 *       '404':
 *         description: Employee not found
 */
router.delete("/:id", EmployeeController.deleteEmployee);

/**
 * @openapi
 * /employees/branch/{branchId}:
 *   get:
 *     summary: Retrieve employees by branch ID
 *     tags: [Employees]
 *     parameters:
 *       - name: branchId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Branch ID to filter employees
 *     responses:
 *       '200':
 *         description: Employees for the specified branch
 */
router.get("/branch/:branchId", EmployeeController.getEmployeesByBranch);

/**
 * @openapi
 * /employees/department/{department}:
 *   get:
 *     summary: Retrieve employees by department
 *     tags: [Employees]
 *     parameters:
 *       - name: department
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Department name to filter employees
 *     responses:
 *       '200':
 *         description: Employees for the specified department
 */
router.get("/department/:department", EmployeeController.getEmployeesByDepartment);

export default router;