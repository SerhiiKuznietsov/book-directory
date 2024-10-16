const { getBooksList } = require('../../services/book');

exports.getList = async (req) => {
  const booksList = await getBooksList(req.query);

  return booksList;
};
