const { CustomError } = require('../../../utils/error');
const bookRepositories = require('../../../infrastructure/book/repositories');
const { ERROR_TYPES } = require('../../../constants/error');

exports.getBookById = async (id) => {
  const foundBook = await bookRepositories.getById(id);

  if (!foundBook) {
    throw new CustomError(`book with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  return foundBook;
};
