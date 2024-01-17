exports.appErrorHandlers = (app) => {
  app.use((req, res, next) => {
    // TODO - fill logic
    next();
  });

  app.use((err, req, res, next) => {
    console.error(err);

    // TODO - fill logic

    const { name = "error", message = "something wrong", status = 500 } = err;

    res.json({ name, message, status });
  });
};
