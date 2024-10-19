const { getByEmail } = require('../../../infrastructure/auth/repositories');
const { createAccessToken } = require('../../../utils/token/access-token');
const { createRefreshToken } = require('../../../utils/token/refresh-token');
const { CustomError } = require('../../../utils/error');
const { ERROR_TYPES } = require('../../../constants/error');

exports.signIn = async (email) => {
  const user = await getByEmail(email);
  if (!user) {
    throw new CustomError('invalid user credential', ERROR_TYPES.BAD_REQUEST);
  }

  const userData = {
    id: user.id,
  };

  const accessToken = createAccessToken(userData);
  const refreshToken = createRefreshToken(userData);

  return { accessToken, refreshToken };
};
