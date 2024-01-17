const { ctrl } = require("../../utils/controller-wrapper");
const { removeBook } = require("../../services/book");

exports.remove = ctrl(async (req) => {
  const { id } = req.params;

  const bookId = await removeBook(id);

  return bookId;
});
