import { branches, Branch } from "../../../data/branches"

export const getAllBranches = (): Branch[] => branches

export const getBranchById = (id: number): Branch | undefined =>
  branches.find(b => b.id === id)

export const addBranch = (branch: Branch): Branch => {
  branches.push(branch)
  return branch
}

export const updateBranch = (id: number, updated: Partial<Branch>): Branch | undefined => {
  const b = branches.find(b => b.id === id)
  if (b) Object.assign(b, updated)
  return b
}

export const deleteBranch = (id: number): boolean => {
  const index = branches.findIndex(b => b.id === id)
  if (index === -1) return false
  branches.splice(index, 1)
  return true
}
