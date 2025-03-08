const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class SignOutUseCase {
  constructor(userRepo) {
    this._userRepo = userRepo;
  }

  async execute() {
    return true;
  }
}

module.exports = {
  SignOutUseCase,
};
