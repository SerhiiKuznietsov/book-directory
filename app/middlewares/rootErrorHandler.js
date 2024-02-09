const { CustomError } = require("../utils/error");

exports.rootErrorHandlers = (app) => {
  app
    .use('*', (req, res, next) => {
      const err = new CustomError(
        `url: "${req.originalUrl}" not found`
      ).setStatus(404);

      // TODO - The error does not get to the next handler
      next(err);
    })
    .use((err, req, res) => {
      console.error(err);

      // TODO - fill logic

      const { name = "error", message = "something wrong", status = 500 } = err;

      res.json({ name, message, status });
    });
};
