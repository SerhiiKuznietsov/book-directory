const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RemoveUserUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute(id) {
    const foundUser = await this._userRepositories.getById(id);
    if (!foundUser) {
      throw new CustomError(
        `user with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    const isUserRemoved = await this._userRepositories.remove(id);
    if (!isUserRemoved) {
      throw new CustomError(
        `user with id: "${id}" not removed`,
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    return id;
  }
}

module.exports = {
  RemoveUserUseCase,
};
