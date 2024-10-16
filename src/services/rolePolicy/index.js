const { getRolesPolicesList } = require('./list');
const { getRolePolicyByUUID } = require('./single');
const { createRolePolicy } = require('./create');
const { updateRolePolicy } = require('./update');
const { removeRolePolicy } = require('./remove');

module.exports = {
  getRolesPolicesList,
  getRolePolicyByUUID,
  createRolePolicy,
  updateRolePolicy,
  removeRolePolicy,
};
