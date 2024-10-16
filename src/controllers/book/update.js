const { updateBook } = require('../../services/book');

exports.update = async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const bookId = await updateBook(id, body);

  return { id: bookId };
};
