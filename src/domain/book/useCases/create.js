const { ERROR_TYPES } = require('../../../constants/error');
const bookRepositories = require('../../../infrastructure/book/repositories');
const { CustomError } = require('../../../utils/error');
const { CreateBookDTO } = require('../DTO/CreateBookDTO');

exports.createBook = async (createBook) => {
  const createBookDTO = new CreateBookDTO(createBook);

  const createdBook = await bookRepositories.create(createBookDTO);
  if (!createdBook) {
    throw new CustomError('book not created', ERROR_TYPES.BAD_REQUEST);
  }

  return createdBook.id;
};
