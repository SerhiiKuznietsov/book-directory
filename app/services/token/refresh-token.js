const { tokenMethodsFactory } = require("./jwt");
const { REFRESH_TOKEN_SECRET } = require("../../config/server");

const { createToken: createRefreshToken, parseToken: parseRefreshToken } =
  tokenMethodsFactory(REFRESH_TOKEN_SECRET, {
    algorithm: "HS512",
    expiresIn: 60 * 2,
  });

module.exports = {
  createRefreshToken,
  parseRefreshToken,
};
