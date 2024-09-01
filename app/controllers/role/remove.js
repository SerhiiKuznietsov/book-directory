const { removeRole } = require('../../services/role');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const roleId = await removeRole(id);

  return roleId;
};
