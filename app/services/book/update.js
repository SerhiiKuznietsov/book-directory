const { validBookUpdate } = require("../../validations/book");
const { CustomError } = require("../../utils/error");
const { Book } = require("../../db/sequelize");
const { getBookById } = require("./single");

exports.updateBook = async (id, bookItem) => {
  validBookUpdate(id, bookItem);

  await getBookById(id);

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
