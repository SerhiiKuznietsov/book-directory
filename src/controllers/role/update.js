const { updateRole } = require('../../services/role');

exports.update = async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const roleId = await updateRole(id, body);

  return { id: roleId };
};
