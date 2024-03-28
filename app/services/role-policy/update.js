const { validRolePolicyUpdate } = require("../../validations/role-policy");
const { CustomError } = require("../../utils/error");
const { RolePolicy } = require("../../db/sequelize");
const { getRolePolicyByUUID } = require("./single");

exports.updateRolePolicy = async (uuid, rolePolicyItem) => {
  validRolePolicyUpdate(uuid, rolePolicyItem);

  await getRolePolicyByUUID(uuid);

  // TODO - add a check to compare permissions against those of the original policy
  const [isRolePolicyUpdated] = await RolePolicy.update(rolePolicyItem, {
    where: {
      uuid,
    },
  });

  if (!isRolePolicyUpdated) {
    throw new CustomError(
      `role and policy linkage by uuid: "${uuid}" not updated`
    ).setStatus(404);
  }

  return uuid;
};
