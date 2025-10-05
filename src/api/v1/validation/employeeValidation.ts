import Joi from "joi";

export const createEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  position: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  branchId: Joi.string().required(),
  department: Joi.string().optional(),
  phone: Joi.string().optional(),
});

export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  position: Joi.string().min(2).max(50).optional(),
  email: Joi.string().email().optional(),
  branchId: Joi.string().optional(),
  department: Joi.string().optional(),
  phone: Joi.string().optional(),
});
