const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RefreshTokenUseCase {
  constructor(userRepo) {
    this._userRepo = userRepo;
  }

  async execute() {
    return true;
  }
}

module.exports = {
  RefreshTokenUseCase,
};
