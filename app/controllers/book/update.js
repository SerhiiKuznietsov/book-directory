const { updateBook } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const bookId = await updateBook(id, body);

  return bookId;
});
