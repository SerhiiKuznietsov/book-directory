class CustomError extends Error {
  constructor(message) {
    super(message);

    // TODO - Add capitalization for first letters
    // TODO - Add the ability to report an error
    this.setName('Error');
    this.setMassage(message || 'Undefined error');
    this.setStatus(500);
  }

  setName(name) {
    this.name = name;

    return this;
  }

  setStatus(status) {
    this.status = status;

    return this;
  }

  setMassage(message) {
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