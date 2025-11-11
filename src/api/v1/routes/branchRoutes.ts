import { Router } from "express";
import * as BranchController from "../controllers/branchController";
import { createBranchSchema, updateBranchSchema } from "../validation/branchValidation";
import { validate } from "../middleware/validate";

const router = Router();

/**
 * @openapi
 * /branches:
 *   get:
 *     summary: Retrieve all branches
 *     tags: [Branches]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all branches
 */
router.get("/", BranchController.getBranches);

/**
 * @openapi
 * /branches/{id}:
 *   get:
 *     summary: Retrieve a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique branch ID
 *     responses:
 *       '200':
 *         description: Branch details
 *       '404':
 *         description: Branch not found
 */
router.get("/:id", BranchController.getBranch);

/**
 * @openapi
 * /branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BranchCreate'
 *     responses:
 *       '201':
 *         description: Branch created successfully
 *       '400':
 *         description: Invalid input
 */
router.post("/", validate(createBranchSchema), BranchController.createBranch);

/**
 * @openapi
 * /branches/{id}:
 *   put:
 *     summary: Update an existing branch
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique branch ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BranchUpdate'
 *     responses:
 *       '200':
 *         description: Branch updated successfully
 *       '404':
 *         description: Branch not found
 */
router.put("/:id", validate(updateBranchSchema), BranchController.updateBranch);

/**
 * @openapi
 * /branches/{id}:
 *   delete:
 *     summary: Delete a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique branch ID
 *     responses:
 *       '204':
 *         description: Branch deleted successfully
 *       '404':
 *         description: Branch not found
 */
router.delete("/:id", BranchController.deleteBranch);

export default router;