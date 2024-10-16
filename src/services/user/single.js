const { CustomError } = require('../../utils/error');
const { User } = require('../../db/sequelize');

exports.getUserById = async (id) => {
  const foundUser = await User.findByPk(id, { raw: true });

  if (!foundUser) {
    throw new CustomError(`user with id: "${id}" not found`).setStatus(404);
  }

  return foundUser;
};

exports.getUserByEmail = async (email) => {
  const foundUser = await User.findOne({ email, raw: true });

  if (!foundUser) {
    throw new CustomError(`user with email: "${email}" not found`).setStatus(404);
  }

  return foundUser;
};