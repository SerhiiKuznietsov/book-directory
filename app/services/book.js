const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");

const getBookById = async (id) => {
  const { Book } = getDbModels();

  const foundBook = await Book.findByPk(id, { raw: true });

  if (!foundBook) {
    throw new CustomError(`book with id: "${id}" not found`).setStatus(404);
  }

  return foundBook;
};

module.exports = {
  getBookById,
};
