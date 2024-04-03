const { validUserCreate } = require('../../validations/user');
const { CustomError } = require('../../utils/error');
const { User } = require('../../db/sequelize');

exports.createUser = async (userItem) => {
  validUserCreate(userItem);

  const { id } = await User.create(userItem);

  if (!id) {
    throw new CustomError('user not created');
  }

  return id;
};
