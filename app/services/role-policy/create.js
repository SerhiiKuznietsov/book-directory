const { validRolePolicyCreate } = require("../../validations/role-policy");
const { CustomError } = require("../../utils/error");
const { RolePolicy } = require("../../db/sequelize");

exports.createRolePolicy = async (rolePolicyItem) => {
  validRolePolicyCreate(rolePolicyItem);

  // TODO - add a check to compare permissions against those of the original policy
  const { uuid } = await RolePolicy.create(rolePolicyItem);

  if (!uuid) {
    throw new CustomError("role and policy linkage not created");
  }

  return uuid;
};
