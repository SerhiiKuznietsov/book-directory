const { validUserUpdate } = require('../../validations/user');
const { CustomError } = require('../../utils/error');
const { getUserById } = require('./single');

exports.updateUser = async (id, userItem) => {
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
