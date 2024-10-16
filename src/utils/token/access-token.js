const { createToken, parseToken } = require('./jwt');
const { ACCESS_TOKEN_SECRET } = require('../../config/server');

const algorithm = 'HS512';
const expiresIn = 60 * 5;

const createAccessToken = (payload) => {
  return createToken(payload, ACCESS_TOKEN_SECRET, {
    algorithm,
    expiresIn,
  });
};

const parseAccessToken = (payload) => {
  return parseToken(payload, ACCESS_TOKEN_SECRET, {
    algorithm,
  });
};

module.exports = {
  createAccessToken,
  parseAccessToken,
};
