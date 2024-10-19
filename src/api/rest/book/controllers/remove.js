const { removeBook } = require('../../../../domain/book/useCases/remove');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const bookId = await removeBook(id);

  return { id: bookId };
};
