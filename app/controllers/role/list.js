const { getRolesList } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req, res) => {
  const rolesList = await getRolesList(req.query);

  res.json(rolesList);
});
