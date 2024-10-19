const { ERROR_TYPES } = require('../../../constants/error');
const roleRepositories = require('../../../infrastructure/role/repositories');
const { CustomError } = require('../../../utils/error');
const { CreateRoleDTO } = require('../DTO/CreateRoleDTO');

exports.createRole = async (roleItem) => {
  const createRoleDTO = new CreateRoleDTO(roleItem);

  const createdRole = await roleRepositories.create(createRoleDTO);
  if (!createdRole) {
    throw new CustomError('role not created', ERROR_TYPES.UNKNOWN_ERROR);
  }

  return createdRole.id;
};
