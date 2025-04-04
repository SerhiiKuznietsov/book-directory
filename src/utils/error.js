const { ERROR_TYPES } = require('../constants/error');
const { capitalize } = require('./stringConverter');

class CustomError extends Error {
  constructor(message, type = ERROR_TYPES.UNKNOWN_ERROR) {
    super();
    this.setName('Error');
    this.setMessage(message || 'Unknown error');
    this.type = type;
    this.suggestions = [];
  }
}

CustomError.prototype.setName = function (name) {
  this.name = capitalize(name);
  return this;
};

CustomError.prototype.setMessage = function (message) {
  message = capitalize(message);
  if (this.stack && this.message) {
    this.stack = this.stack.replace(this.message, message);
  }
  this.message = message;
  return this;
};

CustomError.prototype.setCause = function (causeError) {
  this.cause = causeError;
  return this;
};

CustomError.prototype.addSuggestion = function (suggestion) {
  this.suggestions.push(suggestion);
  return this;
};

CustomError.prototype.getSuggestions = function () {
  return this.suggestions;
};

class ValidationError extends CustomError {
  constructor(message) {
    super(message, ERROR_TYPES.VALIDATION_ERROR);
  }
}

module.exports = {
  CustomError,
  ValidationError,
};
