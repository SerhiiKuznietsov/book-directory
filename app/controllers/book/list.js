const { getBooksList } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req, res) => {
  const booksList = await getBooksList(req.query);

  res.json(booksList);
});
