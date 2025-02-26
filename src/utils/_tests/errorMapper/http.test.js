const { mapErrorTypeToHttpCode } = require('../../errorMapper/http');
const { HTTP_CODE } = require('../../../constants/httpStatus');
const { ERROR_TYPES } = require('../../../constants/error');

describe('mapErrorTypeToHttpCode', () => {
  it('should return correct HTTP code for known error types', () => {
    expect(mapErrorTypeToHttpCode(ERROR_TYPES.INTERNAL_ERROR)).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
    expect(mapErrorTypeToHttpCode(ERROR_TYPES.UNKNOWN_ERROR)).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
    expect(mapErrorTypeToHttpCode(ERROR_TYPES.NOT_FOUND)).toBe(HTTP_CODE.NOT_FOUND);
    expect(mapErrorTypeToHttpCode(ERROR_TYPES.VALIDATION_ERROR)).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
    expect(mapErrorTypeToHttpCode(ERROR_TYPES.BAD_REQUEST)).toBe(HTTP_CODE.BAD_REQUEST);
  });

  it('should return INTERNAL_SERVER_ERROR for unknown error types', () => {
    expect(mapErrorTypeToHttpCode('NON_EXISTENT_ERROR')).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
    expect(mapErrorTypeToHttpCode(null)).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
    expect(mapErrorTypeToHttpCode(undefined)).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
    expect(mapErrorTypeToHttpCode(123)).toBe(HTTP_CODE.INTERNAL_SERVER_ERROR);
  });
});
