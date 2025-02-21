const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RemoveBookUseCase {
  constructor(bookRepositories) {
    this._bookRepositories = bookRepositories;
  }

  async execute(id) {
    const foundBook = await this._bookRepositories.getById(id);
    if (!foundBook) {
      throw new CustomError(
        `book with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    const isBookRemoved = await this._bookRepositories.remove(id);
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
