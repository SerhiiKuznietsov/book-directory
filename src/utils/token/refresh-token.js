const { createToken, parseToken } = require('./jwt');
const { REFRESH_TOKEN_SECRET } = require('../../config/secrets');

const algorithm = 'HS512';
const expiresIn = 60 * 2;

exports.createRefreshToken = (payload) => {
  return createToken(payload, REFRESH_TOKEN_SECRET, {
    algorithm,
    expiresIn,
  });
};

exports.parseRefreshToken = (payload) => {
  return parseToken(payload, REFRESH_TOKEN_SECRET, {
    algorithm,
  });
};
