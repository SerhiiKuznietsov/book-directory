const { validBookRemove } = require('../../validations/book');
const { CustomError } = require('../../utils/error');
const { Book } = require('../../db/sequelize');
const { getBookById } = require('./single');

exports.removeBook = async (id) => {
  validBookRemove(id);

  await getBookById(id);

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
