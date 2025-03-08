const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');
const { comparePasswordAndHash } = require('../../../utils/hashPassword');
const { createAccessToken } = require('../../../utils/token/access-token');
const { createRefreshToken } = require('../../../utils/token/refresh-token');

class SignInUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute(signInDTO) {
    const user = await this._userRepositories.getByEmail(signInDTO.email);
    if (!user) {
      throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
    }

    const isEqual = await comparePasswordAndHash(signInDTO.password, user.hash);
    if (!isEqual) {
      throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
    }

    const userData = {
      id: user.id,
    };

    const accessToken = createAccessToken(userData);
    const refreshToken = createRefreshToken(userData); // TODO - added token to db

    return { accessToken, refreshToken };
  }
}

module.exports = {
  SignInUseCase,
};
