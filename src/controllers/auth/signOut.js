const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../constants/auth');

exports.signOutCtrl = async (request, reply) => {
  if (
    request.cookies[ACCESS_TOKEN_COOKIE_NAME] ||
    request.cookies[REFRESH_TOKEN_COOKIE_NAME]
  ) {
    reply
      .setCookie(ACCESS_TOKEN_COOKIE_NAME, '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      })
      .setCookie(REFRESH_TOKEN_COOKIE_NAME, '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      });
  }

  reply.send({ ok: true });
};
