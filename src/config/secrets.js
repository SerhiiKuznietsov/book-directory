require('dotenv').config();

const { validSecretConfig } = require('./_validations/secrets');

module.exports = {
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};

validSecretConfig(module.exports);
