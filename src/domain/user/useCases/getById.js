const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class GetUserByIdUseCase {
  constructor(userRepo) {
    this._userRepo = userRepo;
  }

  async execute(id) {
    const foundUser = await this._userRepo.getById(id);
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
