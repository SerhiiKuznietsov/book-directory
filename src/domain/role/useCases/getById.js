const { CustomError } = require('../../../utils/error');
const { ERROR_TYPES } = require('../../../constants/error');

class GetRoleByIdUseCase {
  constructor(roleRepo) {
    this._roleRepo = roleRepo;
  }

  async execute(id) {
    const foundRole = await this._roleRepo.getById(id);
    if (!foundRole) {
      throw new CustomError(
        `role with id: "${id}" not found`,
        ERROR_TYPES.NOT_FOUND
      );
    }

    return foundRole;
  }
}

module.exports = {
  GetRoleByIdUseCase,
};
