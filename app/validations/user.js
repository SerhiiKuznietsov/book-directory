const Joi = require('joi');
const { vld } = require('../utils/validator-wrapper');
const { MIN_NAME_LENGTH, MAX_NAME_LENGTH } = require('../constants/user');

const userIdSchema = Joi.number().positive().required();
const userItemSchema = Joi.object({
  name: Joi.string().min(MIN_NAME_LENGTH).max(MAX_NAME_LENGTH),
  email: Joi.string().email(),
  roleId: Joi.number().positive(),
}).required();

const validUserId = (id) => {
  const { error } = userIdSchema.validate(id, { convert: false });

  if (error) throw error;
};

const validUserItem = (userItem) => {
  const { error } = userItemSchema.validate(userItem, { convert: false });

  if (error) throw error;
};

exports.validUserCreate = vld(validUserItem);
exports.validUserRemove = vld(validUserId);
exports.validUserUpdate = vld((id, userItem) => {
  validUserId(id);
  validUserItem(userItem);
});
