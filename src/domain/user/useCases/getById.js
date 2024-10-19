const { CustomError } = require('../../../utils/error');
const userRepositories = require('../../../infrastructure/user/repositories');
const { ERROR_TYPES } = require('../../../constants/error');

exports.getUserById = async (id) => {
  const foundUser = await userRepositories.getById(id);
  if (!foundUser) {
    throw new CustomError(`user with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  return foundUser;
};
