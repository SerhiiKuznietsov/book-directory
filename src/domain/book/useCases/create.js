const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class CreateBookUseCase {
  constructor(bookRepo) {
    this._bookRepo = bookRepo;
  }

  async execute(createBookDTO) {
    const createdBook = await this._bookRepo.create(createBookDTO);
    if (!createdBook) {
      throw new CustomError('book not created', ERROR_TYPES.BAD_REQUEST);
    }

    return createdBook.id;
  }
}

module.exports = {
  CreateBookUseCase,
};
