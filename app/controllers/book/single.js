const { getBookById } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req) => {
  const { id } = req.params;

  const book = await getBookById(id);

  return book;
});
