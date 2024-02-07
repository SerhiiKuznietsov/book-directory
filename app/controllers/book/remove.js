const { ctrl } = require("../../utils/controller-wrapper");
const { removeBook } = require("../../services/book");

exports.remove = ctrl(async (req) => {
  const {
    params: { id },
  } = req;

  const bookId = await removeBook(id);

  return bookId;
});
