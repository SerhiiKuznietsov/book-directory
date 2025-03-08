const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class UpdateUserUseCase {
  constructor(userRepo) {
    this._userRepo = userRepo;
  }

  async execute(id, updateUserDTO) {
    const foundUser = await this._userRepo.getById(id);
    if (!foundUser) {
      throw new CustomError(
        `user with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    const isUserUpdated = await this._userRepo.update(
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
