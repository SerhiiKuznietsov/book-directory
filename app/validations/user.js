const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const validUserItem = (userItem) => {
  const { error } = Joi.object({
    name: Joi.string().min(2).max(123),
    email: Joi.string().email(),
    roleId: Joi.number(),
  })
    .required()
    .validate(userItem);

  if (!error) return;

  throw error;
};

const validUserId = (id) => {
  const { error } = Joi.number().required().validate(id);

  if (!error) return;

  throw error;
};

exports.validUserCreate = vld(validUserItem);

exports.validUserUpdate = vld((id, userItem) => {
  validUserId(id);
  validUserItem(userItem);
});

exports.validUserRemove = vld(validUserId);
