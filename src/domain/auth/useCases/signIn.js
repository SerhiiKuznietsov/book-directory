const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');
const { comparePasswordAndHash } = require('../../../utils/hashPassword');
const { createAccessToken } = require('../../../utils/token/access-token');
const { createRefreshToken } = require('../../../utils/token/refresh-token');

class SignInUseCase {
  constructor(logger, userRepo, sessionRepo) {
    this._logger = logger;
    this._userRepo = userRepo;
    this._sessionRepo = sessionRepo;
  }

  async execute(signInDTO) {
    const user = await this._userRepo.getByEmail(signInDTO.email);
    if (!user) {
      throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
    }

    const isEqual = await comparePasswordAndHash(signInDTO.password, user.hash);
    if (!isEqual) {
      throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
    }

    const isCreated = await this._sessionRepo.create(user.id, user);
    if (!isCreated) {
      throw new CustomError('session error', ERROR_TYPES.BAD_REQUEST);
    }

    const userData = {
      id: user.id,
    };

    const accessToken = createAccessToken(userData);
    const refreshToken = createRefreshToken(userData); // TODO - added token to db

    this._logger.info(`user with id "${user.id}" has logged in`);

    return { accessToken, refreshToken };
  }
}

module.exports = {
  SignInUseCase,
};
