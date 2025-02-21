const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class GetUserByIdUseCase {
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

    return foundUser;
  }
}

module.exports = {
  GetUserByIdUseCase,
};
