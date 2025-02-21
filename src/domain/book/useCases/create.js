const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class CreateBookUseCase {
  constructor(bookRepositories) {
    this._bookRepositories = bookRepositories;
  }

  async execute(createBookDTO) {
    const createdBook = await this._bookRepositories.create(createBookDTO);
    if (!createdBook) {
      throw new CustomError('book not created', ERROR_TYPES.BAD_REQUEST);
    }

    return createdBook.id;
  }
}

module.exports = {
  CreateBookUseCase,
};
