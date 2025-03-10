const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');
const { createAccessToken } = require('../../../utils/token/access-token');
const { createRefreshToken } = require('../../../utils/token/refresh-token');

class RefreshTokenUseCase {
  constructor(logger, userRepo) {
    this._logger = logger;
    this._userRepo = userRepo;
  }

  async execute(refreshTokenDTO) {
    const user = await this._userRepo.getByRefreshToken(refreshTokenDTO.refreshToken);
    if (!user) {
      throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
    }

    const userData = {
      id: user.id,
    };

    const accessToken = createAccessToken(userData);
    const refreshToken = createRefreshToken(userData);

    const isUpdated = await this._userRepo.updateRefreshToken(user.id, refreshToken);
    if (!isUpdated) {
      throw new CustomError('updated session error', ERROR_TYPES.BAD_REQUEST);
    }

    this._logger.info(`user with id “${user.id}” updated token`);

    return { accessToken, refreshToken };
  }
}

module.exports = {
  RefreshTokenUseCase,
};
