const { ERROR_TYPES } = require("../../constants/error");

const httpErrorCodes = {
  [ERROR_TYPES.INTERNAL_ERROR]: 500,
  [ERROR_TYPES.UNKNOWN_ERROR]: 500,
  [ERROR_TYPES.NOT_FOUND]: 404,
  [ERROR_TYPES.VALIDATION_ERROR]: 500,
  [ERROR_TYPES.BAD_REQUEST]: 400,
};

function mapErrorTypeToHttpCode(error) {
  return httpErrorCodes[error.type] || 500;
}

module.exports = {
  mapErrorTypeToHttpCode,
};
