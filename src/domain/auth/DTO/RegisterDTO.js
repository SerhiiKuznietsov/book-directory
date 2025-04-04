const { MIN_PASSWORD_LENGTH } = require('../../../constants/user');
const { ValidationError } = require('../../../utils/error');

const validate = (confirmPassword) => {
  const { password } = this;

  if (password !== confirmPassword) {
    throw new ValidationError('Passwords are not equal');
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new ValidationError('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    throw new ValidationError(
      'Password must contain at least one uppercase letter'
    );
  }

  if (!/[a-z]/.test(password)) {
    throw new ValidationError(
      'Password must contain at least one lowercase letter'
    );
  }

  if (!/\d/.test(password)) {
    throw new ValidationError('Password must contain at least one digit');
  }

  if (!/[@$!%*?&]/.test(password)) {
    throw new ValidationError(
      'Password must contain at least one special character (@$!%*?&)'
    );
  }
};

class RegisterDTO {
  constructor({ name, email, password, confirmPassword }) {
    this.name = name;
    this.email = email;
    this.password = password;

    validate(confirmPassword);
  }
}

module.exports = {
  RegisterDTO,
};
