const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');
const { comparePasswordAndHash } = require('../../../utils/hashPassword');
const { createAccessToken } = require('../../../utils/token/access-token');
const { createRefreshToken } = require('../../../utils/token/refresh-token');
const { TokenPayload } = require('../entities/tokenPayload');

class SignInUseCase {
  constructor(logger, userRepo, userAccessService) {
    this._logger = logger.child({ context: SignInUseCase.name });
    this._userRepo = userRepo;
    this._userAccessService = userAccessService;
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

    const tokenPayload = new TokenPayload(user.id);
    const accessToken = createAccessToken(tokenPayload);
    const refreshToken = createRefreshToken(tokenPayload);

    await this._userAccessService.makeUserSession(user, refreshToken);

    this._logger.info(`user with id "${user.id}" has logged in`);

    return { accessToken, refreshToken };
  }
}

module.exports = {
  SignInUseCase,
};
