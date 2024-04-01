const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const { MIN_NAME_LENGTH, MAX_NAME_LENGTH } = require("../constants/role");

const roleIdSchema = Joi.number().positive().required();
const roleItemSchema = Joi.object({
  name: Joi.string().min(MIN_NAME_LENGTH).max(MAX_NAME_LENGTH),
}).required();

const validRoleId = (id) => {
  const { error } = roleIdSchema.validate(id, { convert: false });

  if (error) throw error;
};

const validRoleItem = (roleItem) => {
  const { error } = roleItemSchema.validate(roleItem, { convert: false });

  if (error) throw error;
};

exports.validRoleCreate = vld(validRoleItem);
exports.validRoleRemove = vld(validRoleId);
exports.validRoleUpdate = vld((id, roleItem) => {
  validRoleId(id);
  validRoleItem(roleItem);
});
