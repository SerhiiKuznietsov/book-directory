const { tokenMethodsFactory } = require("./jwt");
const { AUTH_TOKEN_SECRET } = require("../../config/server");

const { createToken: createAuthToken, parseToken: parseAuthToken } =
  tokenMethodsFactory(AUTH_TOKEN_SECRET, {
    algorithm: "HS512",
    expiresIn: 60 * 2,
  });

module.exports = {
  createAuthToken,
  parseAuthToken,
};
