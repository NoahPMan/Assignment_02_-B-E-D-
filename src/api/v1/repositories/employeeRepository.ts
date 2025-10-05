import { db } from "config/firebaseConfig";
import { Employee } from "../models/employeeModel";

const employeesCollection = db.collection("employees");

export const getAllEmployees = async (): Promise<Employee[]> => {
  const snapshot = await employeesCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Employee));
};

export const getEmployeeById = async (id: string): Promise<Employee | null> => {
  const doc = await employeesCollection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Employee;
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const docRef = await employeesCollection.add(employee);
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() } as Employee;
};

export const updateEmployee = async (id: string, employee: Partial<Employee>): Promise<Employee | null> => {
  const docRef = employeesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;

  await docRef.update(employee);
  const updatedDoc = await docRef.get();
  return { id: updatedDoc.id, ...updatedDoc.data() } as Employee;
};

export const deleteEmployee = async (id: string): Promise<boolean> => {
  const docRef = employeesCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;

  await docRef.delete();
  return true;
};
