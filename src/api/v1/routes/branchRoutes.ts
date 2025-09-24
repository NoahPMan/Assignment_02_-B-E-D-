import { Router } from "express"
import * as BranchController from "../controllers/branchController"

const router = Router()

router.get("/", BranchController.getBranches)
router.get("/:id", BranchController.getBranch)
router.post("/", BranchController.createBranch)
router.put("/:id", BranchController.updateBranch)
router.delete("/:id", BranchController.deleteBranch)

export default router
