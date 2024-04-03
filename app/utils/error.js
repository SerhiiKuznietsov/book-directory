const { capitalize } = require('./string-converter');

class CustomError extends Error {
  constructor(message) {
    super(message);

    this.setName('Error');
    this.setMassage(message || 'Undefined error');
    this.setStatus(500);
  }

  setName(name) {
    this.name = capitalize(name);

    return this;
  }

  setStatus(status) {
    this.status = status;

    return this;
  }

  setMassage(message) {
    message = capitalize(message);

    this.stack = this.stack.replace(this.message, message);
    this.message = message;

    return this;
  }

  setCause(causeError) {
    this.cause = causeError;

    return this;
  }
}

module.exports = {
  CustomError,
};
