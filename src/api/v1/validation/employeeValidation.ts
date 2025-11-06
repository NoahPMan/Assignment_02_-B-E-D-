import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - position
 *         - email
 *         - branchId
 *       properties:
 *         id:
 *           type: string
 *           description: Unique employee ID
 *           example: "emp_001"
 *         name:
 *           type: string
 *           description: Full name of the employee
 *           example: "Jane Doe"
 *         position:
 *           type: string
 *           description: Job position of the employee
 *           example: "Manager"
 *         email:
 *           type: string
 *           format: email
 *           description: Employee's email address
 *           example: "jane.doe@example.com"
 *         branchId:
 *           type: string
 *           description: ID of the branch the employee belongs to
 *           example: "branch_123"
 *         department:
 *           type: string
 *           description: Department name
 *           example: "Finance"
 *         phone:
 *           type: string
 *           description: Contact phone number
 *           example: "+1-204-555-9876"
 *     EmployeeCreate:
 *       type: object
 *       required:
 *         - name
 *         - position
 *         - email
 *         - branchId
 *       properties:
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           description: Full name of the employee
 *         position:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           description: Job position
 *         email:
 *           type: string
 *           format: email
 *           description: Employee's email address
 *         branchId:
 *           type: string
 *           description: Branch ID
 *         department:
 *           type: string
 *           description: Department name
 *         phone:
 *           type: string
 *           description: Contact phone number
 *     EmployeeUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Full name of the employee
 *         position:
 *           type: string
 *           description: Job position
 *         email:
 *           type: string
 *           description: Employee's email address
 *         branchId:
 *           type: string
 *           description: Branch ID
 *         department:
 *           type: string
 *           description: Department name
 *         phone:
 *           type: string
 *           description: Contact phone number
 */

export const createEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  position: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  branchId: Joi.string().required(),
  department: Joi.string().optional(),
  phone: Joi.string().optional(),
});

export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  position: Joi.string().min(2).max(50).optional(),
  email: Joi.string().email().optional(),
  branchId: Joi.string().optional(),
  department: Joi.string().optional(),
  phone: Joi.string().optional(),
});