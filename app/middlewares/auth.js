const {
  READ_PERMISSION_NAME,
  CREATE_PERMISSION_NAME,
  UPDATE_PERMISSION_NAME,
  DELETE_PERMISSION_NAME,
} = require("../constants/permission");
// const {
//   ACCESS_TOKEN_COOKIE_NAME,
//   REFRESH_TOKEN_COOKIE_NAME,
// } = require("../constants/token-cookie");

const rootAuthenticate = (req, res, next) => {
  // TODO - fill logic
  // const {
  //   [ACCESS_TOKEN_COOKIE_NAME]: accessToken,
  //   [REFRESH_TOKEN_COOKIE_NAME]: refreshToken,
  // } = req.cookies;

  // if (!accessToken || !refreshToken) next();

  next();
};

const customCheckMiddleware =
  (policyName, permissionName) => (req, res, next) => {
    // TODO - fill logic
    next();
  };

const readCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, READ_PERMISSION_NAME);

const createCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, CREATE_PERMISSION_NAME);

const updateCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, UPDATE_PERMISSION_NAME);

const deleteCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, DELETE_PERMISSION_NAME);

module.exports = {
  rootAuthenticate,
  customCheckMiddleware,
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
};
