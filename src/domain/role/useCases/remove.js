const { ERROR_TYPES } = require('../../../constants/error');
const roleRepositories = require('../../../infrastructure/role/repositories');
const { CustomError } = require('../../../utils/error');

exports.removeRole = async (id) => {
  const foundRole = await roleRepositories.getById(id);
  if (!foundRole) {
    throw new CustomError(`role with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  const isRoleRemoved = await roleRepositories.remove(id);
  if (!isRoleRemoved) {
    throw new CustomError(`role with id: "${id}" not removed`, ERROR_TYPES.UNKNOWN_ERROR);
  }

  return id;
};
