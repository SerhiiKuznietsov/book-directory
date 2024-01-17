const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  // TODO - add filters and limits
  const { User } = getDbModels();

  const usersList = await User.findAll({ attributes: ['id', 'email', 'roleId', 'createdAt'], raw: true });

  return usersList;
});