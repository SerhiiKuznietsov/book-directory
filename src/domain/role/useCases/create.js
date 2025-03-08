const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class CreateRoleUseCase {
  constructor(roleRepo) {
    this._roleRepo = roleRepo;
  }

  async execute(createRoleDTO) {
    const createdRole = await this._roleRepo.create(createRoleDTO);
    if (!createdRole) {
      throw new CustomError('role not created', ERROR_TYPES.UNKNOWN_ERROR);
    }

    return createdRole.id;
  }
}

module.exports = {
  CreateRoleUseCase,
};
