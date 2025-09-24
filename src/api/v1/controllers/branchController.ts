import { Request, Response } from "express"
import * as BranchService from "../services/branchService"

export const getBranches = (req: Request, res: Response) =>
  res.json(BranchService.getAllBranches())

export const getBranch = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const branch = BranchService.getBranchById(id)
  if (!branch) return res.status(404).json({ error: "Branch not found" })
  res.json(branch)
}

export const createBranch = (req: Request, res: Response) =>
  res.status(201).json(BranchService.addBranch(req.body))

export const updateBranch = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const branch = BranchService.updateBranch(id, req.body)
  if (!branch) return res.status(404).json({ error: "Branch not found" })
  res.json(branch)
}

export const deleteBranch = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const success = BranchService.deleteBranch(id)
  if (!success) return res.status(404).json({ error: "Branch not found" })
  res.status(204).send()
}
