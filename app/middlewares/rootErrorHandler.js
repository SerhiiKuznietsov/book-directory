const { logger } = require('../utils/logger/');

exports.rootErrorHandlers = (err, request, reply) => {
  logger.error(err);

  const { name = 'error', message = 'something wrong', status = 500 } = err;

  reply.code(status).send({ name, message, status });
};
