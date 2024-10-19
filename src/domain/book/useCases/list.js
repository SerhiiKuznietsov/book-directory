const bookRepositories = require('../../../infrastructure/book/repositories');

exports.getBooksList = async (q) => {
  const booksList = await bookRepositories.getList(q);

  return booksList;
};
