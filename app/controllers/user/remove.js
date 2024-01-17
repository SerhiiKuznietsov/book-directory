const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validUserRemove } = require("../../validations/user");
const { getUserById } = require('../../services/user');

exports.remove = ctrl(async (req) => {
  const { id } = req.params;

  validUserRemove(id);

  await getUserById(id);

  const { User } = getDbModels();

  const isUserRemoved = await User.destroy({
    where: {
      id,
    },
  });

  if (!isUserRemoved) {
    throw new CustomError(`user with id: "${id}" not removed`).setStatus(404);
  }

  return id;
});
