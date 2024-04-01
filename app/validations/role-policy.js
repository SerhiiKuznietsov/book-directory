const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const rolePolicyUuidSchema = Joi.string().guid().required();
const accessPermissionSchema = Joi.object({
  accessPermission: Joi.array().not().empty().items(Joi.string().lowercase()),
}).required();

const rolePolicyIdsSchema = Joi.object({
  roleId: Joi.number().positive(),
  policyId: Joi.number().positive(),
}).required();

const itemSchema = Joi.alternatives().try(
  rolePolicyIdsSchema,
  accessPermissionSchema
);

const validRolePolicyUuid = (uuid) => {
  const { error } = rolePolicyUuidSchema.validate(uuid, {
    convert: false,
  });

  if (error) throw error;
};

exports.validRolePolicyCreate = vld((rolePolicyItem) => {
  const { error } = itemSchema.validate(rolePolicyItem, {
    convert: false,
  });

  if (error) throw error;
});

exports.validRolePolicyUpdate = vld((id, rolePolicyItem) => {
  validRolePolicyUuid(id);

  const { error } = accessPermissionSchema.validate(rolePolicyItem, {
    convert: false,
  });

  if (error) throw error;
});

exports.validRolePolicyRemove = vld(validRolePolicyUuid);
