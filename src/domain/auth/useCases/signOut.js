const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class SignOutUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute() {
    return true;
  }
}

module.exports = {
  SignOutUseCase,
};
