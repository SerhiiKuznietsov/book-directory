const { CustomError } = require('../../utils/error');
const { RolePolicy } = require('../../db/sequelize');
const { getRolePolicyByUUID } = require('./single');

exports.removeRolePolicy = async (uuid) => {
  await getRolePolicyByUUID(uuid);

  const isRolePolicyRemoved = await RolePolicy.destroy({
    where: {
      uuid,
    },
  });

  if (!isRolePolicyRemoved) {
    throw new CustomError(
      `role and policy linkage by uuid: "${uuid}" not removed`
    ).setStatus(404);
  }

  return uuid;
};
