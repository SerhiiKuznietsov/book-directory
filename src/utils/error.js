const { capitalize } = require('./stringConverter');

class CustomError extends Error {
  constructor(message, type = 'UNKNOWN_ERROR') {
    super(message);
    this.setName('Error');
    this.setMessage(message || 'Undefined error');
    this.setType(type);
    this.suggestions = [];
  }

  setName(name) {
    this.name = capitalize(name);
    return this;
  }

  setMessage(message) {
    message = capitalize(message);
    this.stack = this.stack.replace(this.message, message);
    this.message = message;
    return this;
  }

  setCause(causeError) {
    this.cause = causeError;
    return this;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  addSuggestion(suggestion) {
    this.suggestions.push(suggestion);
    return this;
  }

  getSuggestions() {
    return this.suggestions;
  }
}

module.exports = {
  CustomError,
};
