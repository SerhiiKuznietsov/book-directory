const { updateRole } = require('../../../../domain/role/useCases/update');

exports.update = async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const roleId = await updateRole(id, body);

  return { id: roleId };
};
