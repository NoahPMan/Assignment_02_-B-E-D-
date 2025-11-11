import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - name
 *         - address
 *       properties:
 *         id:
 *           type: string
 *           description: Unique branch ID
 *           example: "branch_123"
 *         name:
 *           type: string
 *           description: Branch name
 *           example: "Downtown Branch"
 *         address:
 *           type: string
 *           description: Branch address
 *           example: "123 Main Street, Winnipeg"
 *         phone:
 *           type: string
 *           description: Contact phone number
 *           example: "+1-204-555-1234"
 *     BranchCreate:
 *       type: object
 *       required:
 *         - name
 *         - address
 *       properties:
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           description: Branch name
 *           example: "Downtown Branch"
 *         address:
 *           type: string
 *           minLength: 5
 *           maxLength: 100
 *           description: Branch address
 *           example: "123 Main Street, Winnipeg"
 *         phone:
 *           type: string
 *           description: Contact phone number
 *           example: "+1-204-555-1234"
 *     BranchUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Branch name
 *         address:
 *           type: string
 *           description: Branch address
 *         phone:
 *           type: string
 *           description: Contact phone number
 */

export const createBranchSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  address: Joi.string().min(5).max(100).required(),
  phone: Joi.string().optional(),
});

export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  address: Joi.string().min(5).max(100).optional(),
  phone: Joi.string().optional(),
});