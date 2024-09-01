const { logger } = require('../utils/logger/');

exports.rootErrorHandlers = (err, request, reply) => {
  logger.error(err);

  const { name = 'error', message = 'something wrong', status = 500 } = err;

  reply.code(status).send({ name, message, status });
};


// TODO - check needed
    // .use((req, reply, next) => {
    //   const err = new CustomError(
    //     `url: "${req.originalUrl}" not found`
    //   ).setStatus(404);

    //   next(err);
    // })