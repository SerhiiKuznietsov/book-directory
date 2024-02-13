const {
  customCheckMiddleware,
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = require("./auth");

exports.checkMiddlewareFactory = (policyName) => {
  return {
    customCheckMiddleware: (permissionName) =>
      customCheckMiddleware(policyName, permissionName),
    readCheckMiddleware: readCheckMiddleware(policyName),
    createCheckMiddleware: createCheckMiddleware(policyName),
    updateCheckMiddleware: updateCheckMiddleware(policyName),
    deleteCheckMiddleware: deleteCheckMiddleware(policyName),
  };
};
