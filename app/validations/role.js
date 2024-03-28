const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const validRoleItem = (roleItem) => {
  const { error } = Joi.object({
    name: Joi.string().min(1).max(255),
  })
    .required()
    .validate(roleItem);

  if (!error) return;

  throw error;
};

const validRoleId = (id) => {
  const { error } = Joi.number().required().validate(id);

  if (!error) return;

  throw error;
};

exports.validRoleCreate = vld(validRoleItem);

exports.validRoleUpdate = vld((id, roleItem) => {
  validRoleId(id);
  validRoleItem(roleItem);
});

exports.validRoleRemove = vld(validRoleId);
