const { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } = require('../../constants/book');
const { validBookRemove, validBookCreate } = require('../book');

describe('validBookRemove', () => {
  test('should throw error if id is not a positive number', () => {
    expect(() => validBookRemove(-1)).toThrow();
  });

  test('should throw error if id is not provided', () => {
    expect(() => validBookRemove()).toThrow();
  });

  test('should not throw error if id is a positive number', () => {
    expect(() => validBookRemove(1)).not.toThrow();
  });
});

describe('validBookCreate', () => {
  test('should throw error if title length is less than MIN_TITLE_LENGTH', () => {
    expect(() => validBookCreate({ title: '' })).toThrow();
  });

  test('should throw error if title length is more than MAX_TITLE_LENGTH', () => {
    const longTitle = 'a'.repeat(MAX_TITLE_LENGTH + 1);
    expect(() => validBookCreate({ title: longTitle })).toThrow();
  });

  test('should not throw error if title length is between MIN_TITLE_LENGTH and MAX_TITLE_LENGTH', () => {
    const validTitle = 'a'.repeat(MIN_TITLE_LENGTH + 1);
    expect(() => validBookCreate({ title: validTitle })).not.toThrow();
  });
});
