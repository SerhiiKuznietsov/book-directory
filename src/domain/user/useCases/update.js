const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class UpdateUserUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute(id, updateUserDTO) {
    const foundUser = await this._userRepositories.getById(id);
    if (!foundUser) {
      throw new CustomError(
        `user with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    const isUserUpdated = await this._userRepositories.update(
      id,
      updateUserDTO
    );
    if (!isUserUpdated) {
      throw new CustomError(
        `user with id: "${id}" not updated`,
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    return id;
  }
}

module.exports = {
  UpdateUserUseCase,
};
