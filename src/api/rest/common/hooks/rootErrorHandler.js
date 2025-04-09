const {
  mapErrorTypeToHttpCode,
} = require('../../../../utils/errorMapper/http');
const { ERROR_TYPES } = require('../../../../constants/error');

exports.registerRootErrorHandlers = (app, logger) => {
  logger = logger.child({ context: 'RootErrorHandler' });

  app.setErrorHandler((err, _, reply) => {
    logger.error(err);
    const {
      name = 'Error',
      message = 'Something wrong',
      type = ERROR_TYPES.INTERNAL_ERROR,
    } = err;

    const statusCode = err.statusCode || mapErrorTypeToHttpCode(type); // TODO - Take AJV validations to a lower level

    reply.code(statusCode).send({ name, message });
  });
};
