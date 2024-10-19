const { CustomError } = require('../../../utils/error');
const roleRepositories = require('../../../infrastructure/role/repositories');
const { ERROR_TYPES } = require('../../../constants/error');

exports.getRoleById = async (id) => {
  const foundRole = await roleRepositories.getById(id);
  if (!foundRole) {
    throw new CustomError(`role with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  return foundRole;
};
