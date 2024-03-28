const { getBookById } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const bookItem = await getBookById(id);

  res.json(bookItem);
});
