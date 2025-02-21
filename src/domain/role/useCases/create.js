const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class CreateRoleUseCase {
  constructor(roleRepositories) {
    this._roleRepositories = roleRepositories;
  }

  async execute(createRoleDTO) {
    const createdRole = await this._roleRepositories.create(createRoleDTO);
    if (!createdRole) {
      throw new CustomError('role not created', ERROR_TYPES.UNKNOWN_ERROR);
    }

    return createdRole.id;
  }
}

module.exports = {
  CreateRoleUseCase,
};
