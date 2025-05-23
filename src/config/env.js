require('dotenv').config();

const { DEV_MODE, PROD_MODE, TEST_MODE } = require('../constants/server-mode');
const { validEnvConfig } = require('./_validations/env');

module.exports = {
  IS_DEV: process.env.NODE_ENV === DEV_MODE,
  IS_PROD: process.env.NODE_ENV === PROD_MODE,
  IS_TEST: process.env.NODE_ENV === TEST_MODE,
};

validEnvConfig(module.exports);
