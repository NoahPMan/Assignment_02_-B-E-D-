import { Request, Response } from "express";
import * as BranchService from "../services/branchService";

export const getBranches = async (req: Request, res: Response) => {
  try {
    const branches = await BranchService.getBranches();
    res.json({ status: "success", data: branches });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to fetch branches" });
  }
};

export const getBranch = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const branch = await BranchService.getBranch(id);
    if (!branch) return res.status(404).json({ status: "error", message: "Branch not found" });
    res.json({ status: "success", data: branch });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to fetch branch" });
  }
};

export const createBranch = async (req: Request, res: Response) => {
  try {
    const branch = await BranchService.createBranch(req.body);
    res.status(201).json({ status: "success", data: branch });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to create branch" });
  }
};

export const updateBranch = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const branch = await BranchService.updateBranch(id, req.body);
    if (!branch) return res.status(404).json({ status: "error", message: "Branch not found" });
    res.json({ status: "success", data: branch });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to update branch" });
  }
};

export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const success = await BranchService.deleteBranch(id);
    if (!success) return res.status(404).json({ status: "error", message: "Branch not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to delete branch" });
  }
};
