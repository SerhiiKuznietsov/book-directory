const { ERROR_TYPES } = require('../../constants/error');
const { HTTP_CODE } = require('../../constants/httpStatus');

const httpErrorCodes = {
  [ERROR_TYPES.INTERNAL_ERROR]: HTTP_CODE.INTERNAL_SERVER_ERROR,
  [ERROR_TYPES.UNKNOWN_ERROR]: HTTP_CODE.INTERNAL_SERVER_ERROR,
  [ERROR_TYPES.NOT_FOUND]: HTTP_CODE.NOT_FOUND,
  [ERROR_TYPES.VALIDATION_ERROR]: HTTP_CODE.INTERNAL_SERVER_ERROR,
  [ERROR_TYPES.BAD_REQUEST]: HTTP_CODE.BAD_REQUEST,
  [ERROR_TYPES.UNAUTHORIZED]: HTTP_CODE.UNAUTHORIZED,
};

exports.mapErrorTypeToHttpCode = (type) =>
  httpErrorCodes[type] || HTTP_CODE.INTERNAL_SERVER_ERROR;
