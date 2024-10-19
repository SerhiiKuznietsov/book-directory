const { mapErrorTypeToHttpCode } = require('../../../../utils/errorMapper/http');
const { logger } = require('../../../../utils/logger');

exports.rootErrorHandlers = (err, request, reply) => {
  logger.error(err);
  const { name = 'error', message = 'something wrong', type } = err;

  const statusCode = mapErrorTypeToHttpCode(type);

  reply.code(statusCode).send({ name, message });
};
