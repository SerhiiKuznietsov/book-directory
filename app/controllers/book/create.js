const { createBook } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req, res) => {
  const { body } = req;

  const bookId = await createBook(body);

  res.status(201).json(bookId);
});
