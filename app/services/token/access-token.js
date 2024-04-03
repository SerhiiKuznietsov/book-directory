const { tokenMethodsFactory } = require('./jwt');
const { ACCESS_TOKEN_SECRET } = require('../../config/server');

const { createToken: createAccessToken, parseToken: parseAccessToken } =
  tokenMethodsFactory(ACCESS_TOKEN_SECRET, {
    algorithm: 'HS512',
    expiresIn: 60 * 5,
  });

module.exports = {
  createAccessToken,
  parseAccessToken,
};
