
const { getDbModels } = require("../../models");
const { ctrl } = require("../../utils/controller-wrapper");
const { CustomError } = require("../../utils/error");
const { validUserCreate } = require("../../validations/user");

exports.create = ctrl(async (req) => {
  const { body } = req;

  validUserCreate(body);

  const { User } = getDbModels();

  const { id } = await User.create(body);

  if (!id) {
    throw new CustomError('user not created');
  }

  return id;
});