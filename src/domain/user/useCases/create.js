const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class CreateUserUseCase {
  constructor(userRepo) {
    this._userRepo = userRepo;
  }

  async execute(createUserDTO) {
    const createdUser = await this._userRepo.create(createUserDTO);
    if (!createdUser) {
      throw new CustomError('user not created', ERROR_TYPES.UNKNOWN_ERROR);
    }

    return createdUser.id;
  }
}

module.exports = {
  CreateUserUseCase,
};
