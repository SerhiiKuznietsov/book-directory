const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class UpdateBookUseCase {
  constructor(bookRepositories) {
    this._bookRepositories = bookRepositories;
  }

  async execute(id, updateBookDTO) {
    const foundBook = await this._bookRepositories.getById(id);
    if (!foundBook) {
      throw new CustomError(
        `book with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    const isBookUpdated = await this._bookRepositories.update(
      id,
      updateBookDTO
    );
    if (!isBookUpdated) {
      throw new CustomError(
        `book with id: "${id}" not updated`,
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    return id;
  }
}

module.exports = {
  UpdateBookUseCase,
};
