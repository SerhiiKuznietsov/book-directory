const { ERROR_TYPES } = require('../../../constants/error');
const userRepositories = require('../../../infrastructure/user/repositories');
const { CustomError } = require('../../../utils/error');
const { CreateUserDTO } = require('../DTO/CreateUserDTO');

exports.createUser = async (userItem) => {
  const createUserDTO = new CreateUserDTO(userItem);

  const createdUser = await userRepositories.create(createUserDTO);
  if (!createdUser) {
    throw new CustomError('user not created', ERROR_TYPES.UNKNOWN_ERROR);
  }

  return createdUser.id;
};
