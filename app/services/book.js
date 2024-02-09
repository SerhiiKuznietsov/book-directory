const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");
const {
  validBookUpdate,
  validBookCreate,
  validBookRemove,
} = require("../validations/book");

const getBooksList = async () => {
  // TODO - add filters and limits
  const { Book } = getDbModels();

  const booksList = await Book.findAll({
    attributes: ["id", "title", "createdAt"],
    raw: true,
  });

  return booksList;
};

const getBookById = async (id) => {
  const { Book } = getDbModels();

  const foundBook = await Book.findByPk(id, { raw: true });

  if (!foundBook) {
    throw new CustomError(`book with id: "${id}" not found`).setStatus(404);
  }

  return foundBook;
};

const createBook = async (bookItem) => {
  validBookCreate(bookItem);

  const { Book } = getDbModels();

  const { id } = await Book.create(bookItem);

  if (!id) {
    throw new CustomError("book not created");
  }

  return id;
};

const updateBook = async (id, bookItem) => {
  validBookUpdate(id, bookItem);

  await getBookById(id);

  const { Book } = getDbModels();

  const [isBookUpdated] = await Book.update(bookItem, {
    where: {
      id,
    },
  });

  if (!isBookUpdated) {
    throw new CustomError(`book with id: "${id}" not updated`).setStatus(404);
  }

  return id;
};

const removeBook = async (id) => {
  validBookRemove(id);

  await getBookById(id);

  const { Book } = getDbModels();

  const isBookRemoved = await Book.destroy({
    where: {
      id,
    },
  });

  if (!isBookRemoved) {
    throw new CustomError(`book with id: "${id}" not removed`).setStatus(404);
  }

  return id;
};

module.exports = {
  getBooksList,
  getBookById,
  createBook,
  updateBook,
  removeBook,
};
