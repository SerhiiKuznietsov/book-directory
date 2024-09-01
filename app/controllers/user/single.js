const { getUserById } = require('../../services/user');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const userItem = await getUserById(id);

  return userItem;
};
