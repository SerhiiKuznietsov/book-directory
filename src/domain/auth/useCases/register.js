const { ERROR_TYPES } = require('../../../constants/error');
const { DEFAULT_ROLE_NAME } = require('../../../constants/role');
const { CustomError } = require('../../../utils/error');
const { makeHashPassword } = require('../../../utils/hashPassword');

class RegisterUseCase {
  constructor(logger, userRepo, roleRepo) {
    this._logger = logger.child({ context: RegisterUseCase.name });
    this._userRepo = userRepo;
    this._roleRepo = roleRepo;
  }

  async execute(registerDTO) {
    const duplicateUser = await this._userRepo.getByEmail(registerDTO.email);
    if (duplicateUser) {
      throw new CustomError(
        'user with this email address already exists',
        ERROR_TYPES.BAD_REQUEST
      );
    }

    const role = await this._roleRepo.findByName(DEFAULT_ROLE_NAME);
    if (!role) {
      throw new CustomError('default role not found');
    }

    const hash = await makeHashPassword(registerDTO.password);
    const newUser = await this._userRepo.create({
      ...registerDTO,
      hash,
      roleId: role.id,
    });
    if (!newUser) {
      throw new CustomError('user not created', ERROR_TYPES.UNKNOWN_ERROR);
    }

    this._logger.info(`user with id "${newUser.id}" registered`);

    return newUser.id;
  }
}

module.exports = {
  RegisterUseCase,
};
