/* eslint-disable no-unused-vars */
const {
  READ_PERMISSION_NAME,
  CREATE_PERMISSION_NAME,
  UPDATE_PERMISSION_NAME,
  DELETE_PERMISSION_NAME,
} = require('../../../../constants/permission');
// const {
//   ACCESS_TOKEN_COOKIE_NAME,
//   REFRESH_TOKEN_COOKIE_NAME,
// } = require("../constants/token-cookie");


const customCheckMiddleware = (policyName, permissionName) => (request, reply, done) => {
  // TODO - fill logic
  done();
};

exports.customCheckMiddleware = customCheckMiddleware;

exports.readCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, READ_PERMISSION_NAME);

exports.createCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, CREATE_PERMISSION_NAME);

exports.updateCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, UPDATE_PERMISSION_NAME);

exports.deleteCheckMiddleware = (policyName) =>
  customCheckMiddleware(policyName, DELETE_PERMISSION_NAME);
