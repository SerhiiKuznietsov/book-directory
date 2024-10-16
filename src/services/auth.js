const { createAccessToken } = require('../utils/token/access-token');
const { createRefreshToken } = require('../utils/token/refresh-token');
const { getUserByEmail } = require('./user/single');

const signIn = async (email) => {
  const user = await getUserByEmail(email);
  const userData = {
    id: user.id,
  };

  const accessToken = createAccessToken(userData);
  const refreshToken = createRefreshToken(userData);

  return { accessToken, refreshToken };
};

const signOut = () => {};

module.exports = {
  signIn,
  signOut,
};
