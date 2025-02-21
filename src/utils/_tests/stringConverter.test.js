const { capitalize, slugify } = require('../stringConverter');

describe('slugify', () => {
  test('should return "test-word"', () => {
    expect(slugify('test word')).toEqual('test-word');
  });

  test('should return "test-word"', () => {
    expect(slugify(' test word ')).toEqual('test-word');
  });

  test('should return "test-word"', () => {
    expect(slugify('test_word')).toEqual('test-word');
  });

  test('should return "test-word"', () => {
    expect(slugify(['test', 'data_word'])).toEqual('test-data-word');
  });
});

describe('capitalize', () => {
  test('should return "Test word"', () => {
    expect(capitalize('test word')).toEqual('Test word');
  });

  test('should return " test word"', () => {
    expect(capitalize(' test word')).toEqual(' test word');
  });

  test('should return " test word "', () => {
    expect(capitalize(' test word ')).toEqual(' test word ');
  });
});
