const { validRoleUpdate } = require('../../validations/role');
const { CustomError } = require('../../utils/error');
const { Role } = require('../../db/sequelize');
const { getRoleById } = require('./single');

exports.updateRole = async (id, roleItem) => {
  validRoleUpdate(id, roleItem);

  await getRoleById(id);

  const [isRoleUpdated] = await Role.update(roleItem, {
    where: {
      id,
    },
  });

  if (!isRoleUpdated) {
    throw new CustomError(`role with id: "${id}" not updated`).setStatus(404);
  }

  return id;
};
