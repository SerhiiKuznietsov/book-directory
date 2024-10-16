const { CustomError } = require('../../utils/error');
const { getUserById } = require('./single');
const { Book } = require('../../db/sequelize');

exports.updateUser = async (id, userItem) => {
  await getUserById(id);

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
