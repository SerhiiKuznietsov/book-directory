const { ERROR_TYPES } = require('../../../constants/error');
const userRepositories = require('../../../infrastructure/user/repositories');
const { CustomError } = require('../../../utils/error');
const { UpdateUserDTO } = require('../DTO/UpdateUserDTO');

exports.updateUser = async (id, userItem) => {
  const updateUserDTO = new UpdateUserDTO(userItem);

  const foundUser = await userRepositories.getById(id);
  if (!foundUser) {
    throw new CustomError(`user with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  const isUserUpdated = await userRepositories.update(id, updateUserDTO);
  if (!isUserUpdated) {
    throw new CustomError(`user with id: "${id}" not updated`, ERROR_TYPES.UNKNOWN_ERROR);
  }

  return id;
};
