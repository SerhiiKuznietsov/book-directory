const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RefreshTokenUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute() {
    return true;
  }
}

module.exports = {
  RefreshTokenUseCase,
};
