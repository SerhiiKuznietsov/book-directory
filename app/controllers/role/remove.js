const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validRoleRemove } = require("../../validations/role");
const { getRoleById } = require('../../services/role');

exports.remove = ctrl(async (req) => {
  const { id } = req.params;

  validRoleRemove(id);

  await getRoleById(id);

  const { Role } = getDbModels();

  const isRoleRemoved = await Role.destroy({
    where: {
      id,
    },
  });

  if (!isRoleRemoved) {
    throw new CustomError(`role with id: "${id}" not removed`).setStatus(404);
  }

  return id;
});
