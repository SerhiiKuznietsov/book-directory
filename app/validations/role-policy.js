const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const accessPermissionValidator = Joi.array().min(1).items(Joi.string().lowercase())

const validRolePolicyUUID = (uuid) => {
  const { error } = Joi.string().guid().required().validate(uuid);

  if (!error) return;

  throw error;
};

exports.validRolePolicyCreate = vld((rolePolicyItem) => {
  const { error } = Joi.object({
    roleId: Joi.number().min(1),
    policyId: Joi.number().min(1),
    accessPermission: accessPermissionValidator,
  })
    .required()
    .validate(rolePolicyItem, { convert: false });

  if (error) throw error;
});

exports.validRolePolicyUpdate = vld((id, rolePolicyItem) => {
  validRolePolicyUUID(id);

  const { error } = Joi.object({
    accessPermission: accessPermissionValidator,
  })
    .required()
    .validate(rolePolicyItem, { convert: false });

  if (error) throw error;
});

exports.validRolePolicyRemove = vld(validRolePolicyUUID);
