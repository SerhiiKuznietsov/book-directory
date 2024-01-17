const { getBooksList } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  const booksList = await getBooksList();

  return booksList;
});
