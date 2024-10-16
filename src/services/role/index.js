const { getRolesList } = require('./list');
const { getRoleById } = require('./single');
const { createRole } = require('./create');
const { updateRole } = require('./update');
const { removeRole } = require('./remove');

module.exports = {
  getRolesList,
  getRoleById,
  createRole,
  updateRole,
  removeRole,
};
