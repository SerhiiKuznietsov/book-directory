const { ERROR_TYPES } = require('../../../constants/error');
const bookRepositories = require('../../../infrastructure/book/repositories');
const { CustomError } = require('../../../utils/error');
const { UpdateBookDTO } = require('../DTO/UpdateBookDTO');

exports.updateBook = async (id, bookItem) => {
  const updateBookDTO = new UpdateBookDTO(bookItem);

  const foundBook = await bookRepositories.getById(id);
  if (!foundBook) {
    throw new CustomError(`book with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  const isBookUpdated = await bookRepositories.update(id, updateBookDTO);
  if (!isBookUpdated) {
    throw new CustomError(`book with id: "${id}" not updated`, ERROR_TYPES.UNKNOWN_ERROR);
  }

  return id;
};
