const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  // TODO - add filters and limits
  const { Role } = getDbModels();

  const rolesList = await Role.findAll({ attributes: ['id', 'name', 'createdAt'], raw: true });

  return rolesList;
});