class CustomError extends Error {
  constructor(message) {
    super(message);

    this.name = 'Error';
    this.message = message || 'Undefined error';
    this.status = 500;
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