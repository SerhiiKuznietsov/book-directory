const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RemoveBookUseCase {
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

    const isBookRemoved = await this._bookRepo.remove(id);
    if (!isBookRemoved) {
      throw new CustomError(
        `book with id: "${id}" not removed`,
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    return id;
  }
}

module.exports = {
  RemoveBookUseCase,
};
