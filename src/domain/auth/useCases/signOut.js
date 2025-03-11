const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');
const { parseAccessToken } = require('../../../utils/token/access-token');
const { parseRefreshToken } = require('../../../utils/token/refresh-token');

class SignOutUseCase {
  constructor(logger, userRepo, sessionRepo) {
    this._logger = logger;
    this._userRepo = userRepo;
    this._sessionRepo = sessionRepo;
  }

  async execute(signOutDTO) {
    let accessData, refreshData;

    try {
      accessData = parseAccessToken(signOutDTO.accessToken);
    } catch (e) {
      this._logger.warn(
        new CustomError(
          'Invalid access token',
          ERROR_TYPES.UNAUTHORIZED
        ).setCause(e)
      );
    }

    try {
      refreshData = parseRefreshToken(signOutDTO.refreshToken);
    } catch (e) {
      this._logger.warn(
        new CustomError(
          'Invalid refresh token',
          ERROR_TYPES.UNAUTHORIZED
        ).setCause(e)
      );
    }

    if (!accessData?.id && !refreshData?.id) return false;

    const user = await this._userRepo.getById(accessData.id || refreshData.id);
    if (!user) {
      throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
    }

    await this._sessionRepo.remove(user.id);
    await this._userRepo.updateRefreshToken(user.id, null);

    this._logger.info(`user with id "${user.id}" logged out of the system`);

    return true;
  }
}

module.exports = {
  SignOutUseCase,
};
