const { getDbModels } = require("../../models");
const { getRoleById } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validRoleUpdate } = require("../../validations/role");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { id },
  } = req;

  validRoleUpdate(id, body);

  await getRoleById(id);

  const { Role } = getDbModels();

  const [isRoleUpdated] = await Role.update(body, {
    where: {
      id,
    },
  });

  if (!isRoleUpdated) {
    throw new CustomError(`role with id: "${id}" not updated`).setStatus(404);
  }

  return id;
});
