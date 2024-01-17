
const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validBookCreate } = require("../../validations/book");

exports.create = ctrl(async (req) => {
  const { body } = req;

  validBookCreate(body);

  const { Book } = getDbModels();

  const { id } = await Book.create(body);

  if (!id) {
    throw new CustomError('book not created');
  }

  return id;
});