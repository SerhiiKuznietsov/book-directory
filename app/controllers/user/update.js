const { getDbModels } = require("../../models");
const { getUserById } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validUserUpdate } = require("../../validations/user");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { id },
  } = req;

  validUserUpdate(id, body);

  await getUserById(id);

  const { Book } = getDbModels();

  const [isUserUpdated] = await Book.update(body, {
    where: {
      id,
    },
  });

  if (!isUserUpdated) {
    throw new CustomError(`user with id: "${id}" not updated`).setStatus(404);
  }

  return id;
});
