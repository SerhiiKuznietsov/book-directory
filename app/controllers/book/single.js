const { getBookById } = require('../../services/book');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const bookItem = await getBookById(id);

  return bookItem;
};
