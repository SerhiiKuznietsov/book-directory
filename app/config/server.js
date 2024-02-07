const { DEV_MODE, PROD_MODE, TEST_MODE } = require("../constants/server-mode");

module.exports = {
  PORT: process.env.PORT || 80,
  IS_DEV: process.env.NODE_ENV === DEV_MODE,
  IS_PROD: process.env.NODE_ENV === PROD_MODE,
  IS_TEST: process.env.NODE_ENV === TEST_MODE,
};
