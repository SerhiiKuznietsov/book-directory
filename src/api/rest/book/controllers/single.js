const { getBookById } = require('../../../../domain/book/useCases/getById');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const bookItem = await getBookById(id);

  return bookItem;
};
