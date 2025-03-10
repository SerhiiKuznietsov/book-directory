const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');
const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../../constants/auth');
const { SignOutDTO } = require('../../../../domain/auth/DTO/SignOutDTO');
class SignOutCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      cookies: {
        [ACCESS_TOKEN_COOKIE_NAME]: accessToken,
        [REFRESH_TOKEN_COOKIE_NAME]: refreshToken,
      },
    } = req;

    if (accessToken) {
      reply.setCookie(ACCESS_TOKEN_COOKIE_NAME, '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      });
    }

    if (refreshToken) {
      reply.setCookie(REFRESH_TOKEN_COOKIE_NAME, '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      });
    }

    const signOutDTO = new SignOutDTO(accessToken, refreshToken);
    await this.useCase.execute(signOutDTO);

    reply.code(HTTP_CODE.OK).send({ ok: true });
  };
}

module.exports = {
  SignOutCtrl,
};
