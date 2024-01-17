const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  // TODO - add filters and limits
  const { Book } = getDbModels();

  const booksList = await Book.findAll({ attributes: ['id', 'title', 'createdAt'], raw: true });

  return booksList;
});