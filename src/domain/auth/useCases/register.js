const { ERROR_TYPES } = require('../../../constants/error');
const { DEFAULT_ROLE_NAME } = require('../../../constants/role');
const { CustomError } = require('../../../utils/error');
const { makeHashPassword } = require('../../../utils/hashPassword');

class RegisterUseCase {
  constructor(userRepositories, roleRepositories) {
    this._userRepositories = userRepositories;
    this._roleRepositories = roleRepositories;
  }

  async execute(registerDTO) {
    const duplicateUser = await this._userRepositories.getByEmail(registerDTO.email);
    if (duplicateUser) {
      throw new CustomError('user with this email address already exists', ERROR_TYPES.BAD_REQUEST);
    }

    const role = await this._roleRepositories.findByName(DEFAULT_ROLE_NAME);
    if (!role) {
      throw new CustomError('default role not found');
    }

    const hash = await makeHashPassword(registerDTO.password);
    const newUser = await this._userRepositories.create({
      ...registerDTO,
      hash,
      roleId: role.id
    });
    if (!newUser) {
      throw new CustomError('user not created', ERROR_TYPES.UNKNOWN_ERROR);
    }

    return newUser.id;
  }
}

module.exports = {
  RegisterUseCase,
};
