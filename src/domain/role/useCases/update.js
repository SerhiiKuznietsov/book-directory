const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class UpdateRoleUseCase {
  constructor(roleRepositories) {
    this._roleRepositories = roleRepositories;
  }

  async execute(id, updateRoleDTO) {
    const foundRole = await this._roleRepositories.getById(id);
    if (!foundRole) {
      throw new CustomError(
        `role with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    const isRoleUpdated = await this._roleRepositories.update(
      id,
      updateRoleDTO
    );
    if (!isRoleUpdated) {
      throw new CustomError(
        `role with id: "${id}" not updated`,
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    return id;
  }
}

module.exports = {
  UpdateRoleUseCase,
};
