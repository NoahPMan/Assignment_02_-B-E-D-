import * as BranchRepo from "../repositories/branchRepository";
import { Branch } from "../models/branchModel";

export const getBranches = async (): Promise<Branch[]> => {
  return await BranchRepo.getAllBranches();
};

export const getBranch = async (id: string): Promise<Branch | null> => {
  return await BranchRepo.getBranchById(id);
};

export const createBranch = async (branch: Branch): Promise<Branch> => {
  return await BranchRepo.createBranch(branch);
};

export const updateBranch = async (id: string, branch: Partial<Branch>): Promise<Branch | null> => {
  return await BranchRepo.updateBranch(id, branch);
};

export const deleteBranch = async (id: string): Promise<boolean> => {
  return await BranchRepo.deleteBranch(id);
};
