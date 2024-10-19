const { ERROR_TYPES } = require('../../../constants/error');
const roleRepositories = require('../../../infrastructure/role/repositories');
const { CustomError } = require('../../../utils/error');
const { UpdateRoleDTO } = require('../DTO/UpdateRoleDTO');

exports.updateRole = async (id, roleItem) => {
  const updateRoleDTO = new UpdateRoleDTO(roleItem);

  const foundRole = await roleRepositories.getById(id);
  if (!foundRole) {
    throw new CustomError(`role with id: "${id}" not found`, ERROR_TYPES.NOT_FOUND);
  }

  const isRoleUpdated = await roleRepositories.update(id, updateRoleDTO);
  if (!isRoleUpdated) {
    throw new CustomError(`role with id: "${id}" not updated`, ERROR_TYPES.UNKNOWN_ERROR);
  }

  return id;
};
