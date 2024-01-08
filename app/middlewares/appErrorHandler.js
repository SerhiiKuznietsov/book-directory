exports.appErrorHandlers = (app) => {
  app.use((req, res, next) => {
    console.log(req.originUrl);
    next();
  });

  app.use((err, req, res, next) => {
    console.error(err);

    const { name = "error", message = "something wrong", status = 500 } = err;

    res.json({ name, message, status });
  });
};
