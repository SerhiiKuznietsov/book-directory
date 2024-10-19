const { Book } = require('../../common/db/sequelize');

const getList = async (q) => {
  const booksList = await Book.findAll({
    ...q.pagination,
    ...q.sorting,
    raw: true,
  });

  return booksList;
};

const getById = async (id) => {
  const foundBook = await Book.findByPk(id, { raw: true });

  return foundBook;
};

const create = async (bookItem) => {
  const newBook = await Book.create(bookItem);

  return newBook;
};

const update = async (id, bookItem) => {
  const bookData = await Book.update(bookItem, {
    where: {
      id,
    },
    returning: true
  });

  return bookData[1][0];
};

const remove = async (id) => {
  const isBookRemoved = await Book.destroy({
    where: {
      id,
    },
  });

  return isBookRemoved;
};

module.exports = {
  getList,
  getById,
  create,
  update,
  remove,
};
