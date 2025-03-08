const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');

class RegisterDTO {
  constructor({ name, email, password, confirmPassword }) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.#validate(confirmPassword);
  }

  #validate(confirmPassword) {
    const { password } = this;

    if (password !== confirmPassword) {
      throw new CustomError(
        'Passwords are not equal',
        ERROR_TYPES.VALIDATION_ERROR
      );
    }

    if (password.length < 8) {
      throw new CustomError(
        'Password must be at least 8 characters long',
        ERROR_TYPES.VALIDATION_ERROR
      );
    }

    if (!/[A-Z]/.test(password)) {
      throw new CustomError(
        'Password must contain at least one uppercase letter',
        ERROR_TYPES.VALIDATION_ERROR
      );
    }

    if (!/[a-z]/.test(password)) {
      throw new CustomError(
        'Password must contain at least one lowercase letter',
        ERROR_TYPES.VALIDATION_ERROR
      );
    }

    if (!/\d/.test(password)) {
      throw new CustomError(
        'Password must contain at least one digit',
        ERROR_TYPES.VALIDATION_ERROR
      );
    }

    if (!/[@$!%*?&]/.test(password)) {
      throw new CustomError(
        'Password must contain at least one special character (@$!%*?&)',
        ERROR_TYPES.VALIDATION_ERROR
      );
    }
    return true;
  }
}

module.exports = {
  RegisterDTO,
};
