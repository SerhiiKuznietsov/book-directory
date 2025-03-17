const { HTTP_CODE } = require('../../../../../constants/httpStatus');
const { Ctrl } = require('../../../common/controller/defaultCtrl');
const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
  ACCESS_TOKEN_AGE,
  REFRESH_TOKEN_AGE,
} = require('../../../../../constants/auth');
const {
  RefreshTokenDTO,
} = require('../../../../../domain/auth/DTO/RefreshTokenDTO');

class RefreshTokenCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      cookies: { [REFRESH_TOKEN_COOKIE_NAME]: refreshTokenValue },
    } = req;

    if (!refreshTokenValue) return;

    const refreshTokenDTO = new RefreshTokenDTO(refreshTokenValue);

    const { accessToken, refreshToken } = await this.useCase.execute(
      refreshTokenDTO
    );

    reply
      .code(HTTP_CODE.OK)
      .setCookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, {
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
        maxAge: ACCESS_TOKEN_AGE,
      })
      .setCookie(REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
        maxAge: REFRESH_TOKEN_AGE,
      })
      .send({ accessToken, refreshToken });
  };
}

module.exports = {
  RefreshTokenCtrl,
};
