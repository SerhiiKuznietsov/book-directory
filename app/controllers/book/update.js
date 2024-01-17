const { getDbModels } = require("../../models");
const { getBookById } = require("../../services/book");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validBookUpdate } = require("../../validations/book");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { id },
  } = req;

  validBookUpdate(id, body);

  await getBookById(id);

  const { Book } = getDbModels();

  const [isBookUpdated] = await Book.update(body, {
    where: {
      id,
    },
  });

  if (!isBookUpdated) {
    throw new CustomError(`Book with id: "${id}" not updated`).setStatus(404);
  }

  return id;
});
