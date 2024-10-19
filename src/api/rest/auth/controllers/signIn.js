const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../..//constants/auth');
const { signIn } = require('../../../../domain/auth/useCases/signIn');

exports.signInCtrl = async (request, reply) => {
  if (
    request.cookies[ACCESS_TOKEN_COOKIE_NAME] ||
    request.cookies[REFRESH_TOKEN_COOKIE_NAME]
  ) {
    throw new Error('user already sign in');
  }

  const { email } = request.body;

  const { accessToken, refreshToken } = await signIn(email);

  reply
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
