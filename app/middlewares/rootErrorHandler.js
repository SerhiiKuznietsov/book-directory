const { CustomError } = require('../utils/error');
const { logger } = require('../utils/logger/');

exports.rootErrorHandlers = (app) => {
  app
    .use((req, res, next) => {
      const err = new CustomError(
        `url: "${req.originalUrl}" not found`
      ).setStatus(404);

      next(err);
    })
    .use((err, req, res, next) => {
      logger.error(err);

      const { name = 'error', message = 'something wrong', status = 500 } = err;

      res.status(status).json({ name, message, status });
    });
};
