const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const { MIN_NAME_LENGHT, MAX_NAME_LENGHT } = require("../constants/user");

const userIdShema = Joi.number().positive().required();
const userItemShema = Joi.object({
  name: Joi.string().min(MIN_NAME_LENGHT).max(MAX_NAME_LENGHT),
  email: Joi.string().email(),
  roleId: Joi.number().positive(),
}).required();

const validUserId = (id) => {
  const { error } = userIdShema.validate(id, { convert: false });

  if (error) throw error;
};

const validUserItem = (userItem) => {
  const { error } = userItemShema.validate(userItem, { convert: false });

  if (error) throw error;
};

exports.validUserCreate = vld(validUserItem);
exports.validUserRemove = vld(validUserId);
exports.validUserUpdate = vld((id, userItem) => {
  validUserId(id);
  validUserItem(userItem);
});
