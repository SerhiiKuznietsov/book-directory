const { CustomError } = require("./error");

exports.vld = (validationFunction) => {
  return (...args) => {
    try {
      return validationFunction(...args);
    } catch (e) {
      throw new CustomError(e.message)
        .setName("Validation error")
        .setStatus(400)
        .setCause(e);
    }
  };
};
