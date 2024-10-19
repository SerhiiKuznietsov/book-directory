const { ERROR_TYPES } = require('../../../constants/error');
const bookRepositories = require('../../../infrastructure/book/repositories');
const { CustomError } = require('../../../utils/error');

exports.removeBook = async (id) => {
  const foundBook = await bookRepositories.getById(id);
  if (!foundBook) {
    throw new CustomError(`book with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  const isBookRemoved = await bookRepositories.remove(id);
  if (!isBookRemoved) {
    throw new CustomError(`book with id: "${id}" not removed`, ERROR_TYPES.UNKNOWN_ERROR);
  }

  return id;
};
