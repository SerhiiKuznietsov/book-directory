const { ERROR_TYPES } = require('../../constants/error');
const { CustomError } = require('../error');

jest.mock('../stringConverter', () => ({
  capitalize: jest.fn((str) => str.charAt(0).toUpperCase() + str.slice(1)),
}));

const { capitalize } = require('../stringConverter');

describe('CustomError', () => {
  it('should create an error instance with default values', () => {
    const error = new CustomError();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Unknown error');
    expect(error.type).toBe(ERROR_TYPES.UNKNOWN_ERROR);
    expect(error.name).toBe('Error');
    expect(error.getSuggestions()).toEqual([]);
  });

  it('should set a custom message and type', () => {
    const error = new CustomError('Something went wrong', ERROR_TYPES.VALIDATION_ERROR);
    expect(error.message).toBe('Something went wrong');
    expect(error.type).toBe(ERROR_TYPES.VALIDATION_ERROR);
  });

  it('should set name correctly', () => {
    const error = new CustomError('Test error');
    error.setName('customError');
    expect(capitalize).toHaveBeenCalledWith('customError');
    expect(error.name).toBe('CustomError');
  });

  it('should set message correctly', () => {
    const error = new CustomError('Initial message');
    error.setMessage('Updated message');
    expect(capitalize).toHaveBeenCalledWith('Updated message');
    expect(error.message).toBe('Updated message');
  });

  it('should set cause correctly', () => {
    const cause = new Error('Underlying issue');
    const error = new CustomError('Test error');
    error.setCause(cause);
    expect(error.cause).toBe(cause);
  });

  it('should set type correctly', () => {
    const error = new CustomError('Type error');
    error.setType(ERROR_TYPES.AUTH_ERROR);
    expect(error.type).toBe(ERROR_TYPES.AUTH_ERROR);
  });

  it('should add and retrieve suggestions', () => {
    const error = new CustomError('Test error');
    error.addSuggestion('Try restarting');
    error.addSuggestion('Check logs');
    expect(error.getSuggestions()).toEqual(['Try restarting', 'Check logs']);
  });
});
