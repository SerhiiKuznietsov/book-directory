const { CustomError } = require('../../utils/error');
const { Book } = require('../../db/sequelize');

exports.createBook = async (bookItem) => {
  const { id } = await Book.create(bookItem);

  if (!id) {
    throw new CustomError('book not created');
  }

  return id;
};
