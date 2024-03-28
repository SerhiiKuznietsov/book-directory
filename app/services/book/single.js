const { CustomError } = require("../../utils/error");
const { Book } = require("../../db/sequelize");

exports.getBookById = async (id) => {
  const foundBook = await Book.findByPk(id, { raw: true });

  if (!foundBook) {
    throw new CustomError(`book with id: "${id}" not found`).setStatus(404);
  }

  return foundBook;
};
