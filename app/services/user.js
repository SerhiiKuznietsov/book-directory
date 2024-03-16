const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");
const {
  validUserCreate,
  validUserUpdate,
  validUserRemove,
} = require("../validations/user");
const { SequelizeQueryBuilder } = require("./db-query");

const getUsersList = async (query) => {
  const { User } = getDbModels();

  const q = new SequelizeQueryBuilder(Role, query)
    .setAccessFields(["id", "email", "roleId", "createdAt"])
    .activateRaw()
    .getDbQuery();

  const usersList = await User.findAll(q);

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
