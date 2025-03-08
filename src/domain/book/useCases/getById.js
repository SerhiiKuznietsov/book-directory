const { CustomError } = require('../../../utils/error');
const { ERROR_TYPES } = require('../../../constants/error');

class GetBookByIdUseCase {
  constructor(bookRepo) {
    this._bookRepo = bookRepo;
  }

  async execute(id) {
    const foundBook = await this._bookRepo.getById(id);

    if (!foundBook) {
      throw new CustomError(
        `book with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    return foundBook;
  }
}

module.exports = {
  GetBookByIdUseCase,
};
