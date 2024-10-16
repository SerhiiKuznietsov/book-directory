const { SequelizeFindInterface } = require('../dbQuery');
const { Role } = require('../../db/sequelize');

const roleInterface = new SequelizeFindInterface(Role)
  .setDefaultAttrs('id', 'name')
  .activateRaw();

exports.getRolesList = async (query) => {
  const q = roleInterface.getFindQuery(query);

  const rolesList = await Role.findAll(q);

  return rolesList;
};
