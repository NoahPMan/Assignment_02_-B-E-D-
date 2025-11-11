import { db } from "../../../../config/firebaseConfig";
import { Branch } from "../models/branchModel";

const branchesCollection = db.collection("branches");

export const getAllBranches = async (): Promise<Branch[]> => {
  const snapshot = await branchesCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Branch));
};

export const getBranchById = async (id: string): Promise<Branch | null> => {
  const doc = await branchesCollection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Branch;
};

export const createBranch = async (branch: Branch): Promise<Branch> => {
  const docRef = await branchesCollection.add(branch);
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() } as Branch;
};

export const updateBranch = async (id: string, branch: Partial<Branch>): Promise<Branch | null> => {
  const docRef = branchesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;

  await docRef.update(branch);
  const updatedDoc = await docRef.get();
  return { id: updatedDoc.id, ...updatedDoc.data() } as Branch;
};

export const deleteBranch = async (id: string): Promise<boolean> => {
  const docRef = branchesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;

  await docRef.delete();
  return true;
};
