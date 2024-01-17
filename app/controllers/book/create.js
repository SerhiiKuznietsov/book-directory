const { createBook } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req) => {
  const { body } = req;

  const id = await createBook(body);

  return id;
});
