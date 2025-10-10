import Joi from "joi";

export const createBranchSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  address: Joi.string().min(5).max(100).required(),
  phone: Joi.string().optional(),
});

export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  address: Joi.string().min(5).max(100).optional(),
  phone: Joi.string().optional(),
});
