const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");
const {
  validUserCreate,
  validUserUpdate,
  validUserRemove,
} = require("../validations/user");

const getUsersList = async () => {
  // TODO - add filters and limits
  const { User } = getDbModels();

  const usersList = await User.findAll({
    attributes: ["id", "email", "roleId", "createdAt"],
    raw: true,
  });

  return usersList;
};

const getUserById = async (id) => {
  const { User } = getDbModels();

  const foundUser = await User.findByPk(id, { raw: true });

  if (!foundUser) {
    throw new CustomError(`user with id: "${id}" not found`).setStatus(404);
  }

  return foundUser;
};

const createUser = async (userItem) => {
  validUserCreate(userItem);

  const { User } = getDbModels();

  const { id } = await User.create(userItem);

  if (!id) {
    throw new CustomError("user not created");
  }

  return id;
};
const updateUser = async (id, userItem) => {
  validUserUpdate(id, userItem);

  await getUserById(id);

  const { Book } = getDbModels();

  const [isUserUpdated] = await Book.update(userItem, {
    where: {
      id,
    },
  });

  if (!isUserUpdated) {
    throw new CustomError(`user with id: "${id}" not updated`).setStatus(404);
  }

  return id;
};
const removeUser = async (id) => {
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
};

module.exports = {
  getUsersList,
  getUserById,
  createUser,
  updateUser,
  removeUser,
};
