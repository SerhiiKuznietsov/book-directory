const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class CreateUserUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute(createUserDTO) {
    const createdUser = await this._userRepositories.create(createUserDTO);
    if (!createdUser) {
      throw new CustomError('user not created', ERROR_TYPES.UNKNOWN_ERROR);
    }

    return createdUser.id;
  }
}

module.exports = {
  CreateUserUseCase,
};
