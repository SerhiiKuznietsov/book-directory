const userRepositories = require('../../../infrastructure/user/repositories');

exports.getUsersList = async (q) => {
  const usersList = await userRepositories.getList(q);

  return usersList;
};
