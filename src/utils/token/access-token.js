const { createToken, parseToken } = require('./jwt');
const { ACCESS_TOKEN_SECRET } = require('../../config/secrets');
const { ACCESS_TOKEN_AGE, REFRESH_TOKEN_AGE } = require('../../constants/auth');

const algorithm = 'HS512';

exports.createAccessToken = (payload) => {
  return createToken(payload, ACCESS_TOKEN_SECRET, {
    algorithm,
    expiresIn: ACCESS_TOKEN_AGE,
  });
};

exports.parseAccessToken = (payload) => {
  return parseToken(payload, ACCESS_TOKEN_SECRET, {
    algorithm,
    expiresIn: REFRESH_TOKEN_AGE,
  });
};
