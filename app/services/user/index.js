const { getUsersList } = require("./list");
const { getUserById } = require("./single");
const { createUser } = require("./create");
const { updateUser } = require("./update");
const { removeUser } = require("./remove");

module.exports = {
  getUsersList,
  getUserById,
  createUser,
  updateUser,
  removeUser,
};
