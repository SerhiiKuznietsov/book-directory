const baseConfig = require("./jest.config");

module.exports = {
  ...baseConfig,
  testMatch: ["<rootDir>/src/**/*.test.js"]
};
