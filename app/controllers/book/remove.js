const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validBookRemove } = require("../../validations/book");
const { getBookById } = require('../../services/book');

exports.remove = ctrl(async (req) => {
  const { id } = req.params;

  validBookRemove(id);

  await getBookById(id);

  const { Book } = getDbModels();

  const isBookRemoved = await Book.destroy({
    where: {
      id,
    },
  });

  if (!isBookRemoved) {
    throw new CustomError(`Book with id: "${id}" not removed`).setStatus(404);
  }

  return id;
});
