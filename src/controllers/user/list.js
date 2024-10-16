const { getUsersList } = require('../../services/user');

exports.getList = async (req) => {
  const usersList = await getUsersList(req.query);

  return usersList;
};
