const { createToken, parseToken } = require('./jwt');
const { REFRESH_TOKEN_SECRET } = require('../../config/server');

const algorithm = 'HS512';
const expiresIn = 60 * 2;

const createRefreshToken = (payload) => {
  return createToken(payload, REFRESH_TOKEN_SECRET, {
    algorithm,
    expiresIn,
  });
};

const parseRefreshToken = (payload) => {
  return parseToken(payload, REFRESH_TOKEN_SECRET, {
    algorithm,
  });
};

module.exports = {
  createRefreshToken,
  parseRefreshToken,
};
