const { removeBook } = require('../../services/book');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const bookId = await removeBook(id);

  return bookId;
};
