const { getRolesPolicesList } = require('../../services/role-policy');
const { ctrl } = require('../../utils/controller-wrapper');

exports.getList = ctrl(async (req, res) => {
  const rolesPolicesList = await getRolesPolicesList(req.query);

  res.json(rolesPolicesList);
});
