
const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validRoleCreate } = require("../../validations/role");

exports.create = ctrl(async (req) => {
  const { body } = req;

  validRoleCreate(body);

  const { Role } = getDbModels();

  const { id } = await Role.create(body);

  if (!id) {
    throw new CustomError('role not created');
  }

  return id;
});