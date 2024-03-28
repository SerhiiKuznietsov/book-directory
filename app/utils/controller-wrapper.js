const ctrlWrapper = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

exports.ctrl = (handler) => ctrlWrapper(handler);
