const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");

const getUserById = async (id) => {
  const { User } = getDbModels();

  const foundUser = await User.findByPk(id, { raw: true });

  if (!foundUser) {
    throw new CustomError(`user with id: "${id}" not found`).setStatus(404);
  }

  return foundUser;
};

module.exports = {
  getUserById,
};
