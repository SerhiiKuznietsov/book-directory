const { CustomError } = require('../../utils/error');
const { Role } = require('../../db/sequelize');
const { getRoleById } = require('./single');

exports.removeRole = async (id) => {
  await getRoleById(id);

  const isRoleRemoved = await Role.destroy({
    where: {
      id,
    },
  });

  if (!isRoleRemoved) {
    throw new CustomError(`role with id: "${id}" not removed`).setStatus(404);
  }

  return id;
};
