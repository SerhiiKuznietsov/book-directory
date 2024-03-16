const { getDbModels } = require("../db");
const { CustomError } = require("../utils/error");
const {
  validBookUpdate,
  validBookCreate,
  validBookRemove,
} = require("../validations/book");
const { SequelizeQueryBuilder } = require("./db-query");

const getBooksList = async (query) => {
  const { Book } = getDbModels();

  const q = new SequelizeQueryBuilder(Book, query)
    .setAccessFields(["id", "title", "createdAt"])
    .activateRaw()
    .getDbQuery();

  const booksList = await Book.findAll(q);

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
