const { CustomError } = require('../../utils/error');
const { Role } = require('../../db/sequelize');
const { validRoleRemove } = require('../../validations/role');

exports.removeRole = async (id) => {
  validRoleRemove(id);

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
