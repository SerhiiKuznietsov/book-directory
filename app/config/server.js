require('dotenv').config();
const { validServerConfig } = require('../validations/config/server');
const { DEV_MODE, PROD_MODE, TEST_MODE } = require('../constants/server-mode');

module.exports = {
  PORT: +process.env.PORT || 80,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  IS_DEV: process.env.NODE_ENV === DEV_MODE,
  IS_PROD: process.env.NODE_ENV === PROD_MODE,
  IS_TEST: process.env.NODE_ENV === TEST_MODE,
};

validServerConfig(module.exports);
