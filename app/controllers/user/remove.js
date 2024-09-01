const { removeUser } = require('../../services/user');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const userId = await removeUser(id);

  return userId;
};
