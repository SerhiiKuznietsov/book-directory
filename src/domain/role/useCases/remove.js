const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RemoveRoleUseCase {
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

    const isRoleRemoved = await this._roleRepo.remove(id);
    if (!isRoleRemoved) {
      throw new CustomError(
        `role with id: "${id}" not removed`,
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    return id;
  }
}

module.exports = {
  RemoveRoleUseCase,
};
