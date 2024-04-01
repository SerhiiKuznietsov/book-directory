const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const rolePolicyUuidShema = Joi.string().guid().required();
const accessPermissionShema = Joi.object({
  accessPermission: Joi.array().not().empty().items(Joi.string().lowercase()),
}).required();

const rolePolicyIdsShema = Joi.object({
  roleId: Joi.number().positive(),
  policyId: Joi.number().positive(),
}).required();

const itemShema = Joi.alternatives().try(
  rolePolicyIdsShema,
  accessPermissionShema
);

const validRolePolicyUuid = (uuid) => {
  const { error } = rolePolicyUuidShema.validate(uuid, {
    convert: false,
  });

  if (error) throw error;
};

exports.validRolePolicyCreate = vld((rolePolicyItem) => {
  const { error } = itemShema.validate(rolePolicyItem, {
    convert: false,
  });

  if (error) throw error;
});

exports.validRolePolicyUpdate = vld((id, rolePolicyItem) => {
  validRolePolicyUuid(id);

  const { error } = accessPermissionShema.validate(rolePolicyItem, {
    convert: false,
  });

  if (error) throw error;
});

exports.validRolePolicyRemove = vld(validRolePolicyUuid);
