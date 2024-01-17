const { getUsersList } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  const usersList = await getUsersList();

  return usersList;
});
