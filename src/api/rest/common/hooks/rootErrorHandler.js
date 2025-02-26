const { mapErrorTypeToHttpCode } = require('../../../../utils/errorMapper/http');
const { ERROR_TYPES } = require('../../../../constants/error');
const { logger } = require('../../../../utils/logger');

exports.rootErrorHandlers = (err, request, reply) => {
  logger.error(err);
  const { name = 'error', message = 'something wrong', type = ERROR_TYPES.INTERNAL_ERROR } = err;

  const statusCode = mapErrorTypeToHttpCode(type);

  reply.code(statusCode).send({ name, message });
};
