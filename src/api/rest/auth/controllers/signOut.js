const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');
const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../../constants/auth');
const { IS_PROD } = require('../../../../config/server');
const { SignOutDTO } = require('../../../../domain/auth/DTO/SignOutDTO');

class SignOutCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      cookies: {
        [ACCESS_TOKEN_COOKIE_NAME]: accessToken,
        [REFRESH_TOKEN_COOKIE_NAME]: refreshToken,
      },
    } = req;

    const signOutDTO = new SignOutDTO(accessToken, refreshToken);
    await this.useCase.execute(signOutDTO);

    reply
      .code(HTTP_CODE.OK)
      .setCookie(ACCESS_TOKEN_COOKIE_NAME, '', {
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
        secure: IS_PROD,
        expires: new Date(0),
      })
      .setCookie(REFRESH_TOKEN_COOKIE_NAME, '', {
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
        secure: IS_PROD,
        expires: new Date(0),
      })
      .send({ ok: true });
  };
}

module.exports = {
  SignOutCtrl,
};
