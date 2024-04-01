const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const { MIN_NAME_LENGHT, MAX_NAME_LENGHT } = require("../constants/role");

const roleIdShema = Joi.number().positive().required();
const roleItemShema = Joi.object({
  name: Joi.string().min(MIN_NAME_LENGHT).max(MAX_NAME_LENGHT),
}).required();

const validRoleId = (id) => {
  const { error } = roleIdShema.validate(id, { convert: false });

  if (error) throw error;
};

const validRoleItem = (roleItem) => {
  const { error } = roleItemShema.validate(roleItem, { convert: false });

  if (error) throw error;
};

exports.validRoleCreate = vld(validRoleItem);
exports.validRoleRemove = vld(validRoleId);
exports.validRoleUpdate = vld((id, roleItem) => {
  validRoleId(id);
  validRoleItem(roleItem);
});
