const ctrlWrapper = (handler) => {
  return async (req, res, next) => {
    try {
      const response = await handler(req);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };
};

exports.ctrl = (handler) => ctrlWrapper(handler);
