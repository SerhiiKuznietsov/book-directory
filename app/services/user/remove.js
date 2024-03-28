const { validUserRemove } = require("../../validations/user");
const { CustomError } = require("../../utils/error");
const { User } = require("../../db/sequelize");
const { getUserById } = require("./single");

exports.removeUser = async (id) => {
  validUserRemove(id);

  await getUserById(id);

  const isUserRemoved = await User.destroy({
    where: {
      id,
    },
  });

  if (!isUserRemoved) {
    throw new CustomError(`user with id: "${id}" not removed`).setStatus(404);
  }

  return id;
};
