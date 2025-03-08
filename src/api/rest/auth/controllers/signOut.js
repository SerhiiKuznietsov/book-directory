const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');
const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../../constants/auth');
class SignOutCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      cookies: {
        [ACCESS_TOKEN_COOKIE_NAME]: accessTokenValue,
        [REFRESH_TOKEN_COOKIE_NAME]: refreshTokenValue,
      },
    } = req;

    await this.useCase.execute(accessTokenValue, refreshTokenValue);

    if (accessTokenValue) {
      reply.setCookie(ACCESS_TOKEN_COOKIE_NAME, '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      });
    }

    if (refreshTokenValue) {
      reply.setCookie(REFRESH_TOKEN_COOKIE_NAME, '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      });
    }

    reply.code(HTTP_CODE.OK).send({ ok: true });
  };
}

module.exports = {
  SignOutCtrl,
};
