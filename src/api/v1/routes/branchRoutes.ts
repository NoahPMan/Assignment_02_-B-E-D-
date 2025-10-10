import { Router } from "express";
import * as BranchController from "../controllers/branchController";
import { createBranchSchema, updateBranchSchema } from "../validation/branchValidation";
import { validate } from "../middleware/validate";

const router = Router();

router.get("/", BranchController.getBranches);
router.get("/:id", BranchController.getBranch);

router.post("/", validate(createBranchSchema), BranchController.createBranch);
router.put("/:id", validate(updateBranchSchema), BranchController.updateBranch);

router.delete("/:id", BranchController.deleteBranch);

export default router;
