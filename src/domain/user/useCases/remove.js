const { ERROR_TYPES } = require('../../../constants/error');
const userRepositories = require('../../../infrastructure/user/repositories');
const { CustomError } = require('../../../utils/error');

exports.removeUser = async (id) => {
  const foundUser = await userRepositories.getById(id);
  if (!foundUser) {
    throw new CustomError(`user with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  const isUserRemoved = await userRepositories.remove(id);
  if (!isUserRemoved) {
    throw new CustomError(`user with id: "${id}" not removed`, ERROR_TYPES.UNKNOWN_ERROR);
  }

  return id;
};
