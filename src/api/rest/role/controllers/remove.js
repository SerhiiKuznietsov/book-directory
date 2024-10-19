const { removeRole } = require('../../../../domain/role/useCases/remove');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const roleId = await removeRole(id);

  return { id: roleId };
};
