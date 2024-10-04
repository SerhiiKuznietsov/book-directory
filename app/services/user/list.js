const { User, Role } = require('../../db/sequelize');
const { SequelizeFindInterface } = require('../dbQuery');

const userInterface = new SequelizeFindInterface(User)
  .setDefaultAttrs('id', 'email')
  .setNestedModel(Role, 'role', ['name']);

exports.getUsersList = async (query) => {
  const q = userInterface.getFindQuery(query);

  const usersList = await User.findAll(q);

  return usersList;
};
