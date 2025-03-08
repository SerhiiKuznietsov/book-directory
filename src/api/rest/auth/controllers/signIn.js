const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');
const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../../constants/auth');
const { SignInDTO } = require('../../../../domain/auth/DTO/SignInDTO');
class SignInCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      body,
      cookies: {
        [ACCESS_TOKEN_COOKIE_NAME]: accessTokenValue,
        [REFRESH_TOKEN_COOKIE_NAME]: refreshTokenValue,
      },
    } = req;

    if (accessTokenValue || refreshTokenValue) {
      throw new Error('user already sign in');
    }

    const signInDTO = new SignInDTO(body);

    const { accessToken, refreshToken } = await this.useCase.execute(signInDTO);

    reply
      .code(HTTP_CODE.OK)
      .setCookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, {
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
      })
      .setCookie(REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
      })
      .send({ accessToken, refreshToken });
  };
}

module.exports = {
  SignInCtrl,
};
