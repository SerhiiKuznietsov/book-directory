const {
  makeHashPassword,
  comparePasswordAndHash,
} = require('../hashPassword');

describe('Hashing Utilities', () => {
  const password = 'securePassword';
  const wrongPassword = 'wrongPassword';

  test('makeHashPassword must hash the password correctly', async () => {
    const hash = await makeHashPassword(password);

    expect(hash).toBeDefined();
    expect(typeof hash).toBe('string');
    expect(hash.length).toBeGreaterThan(20);
  });

  test('comparePasswordAndHash should return true for the correct password', async () => {
    const hash = await makeHashPassword(password);
    const result = await comparePasswordAndHash(password, hash);

    expect(result).toBe(true);
  });

  test('comparePasswordAndHash should return false for an invalid password', async () => {
    const hash = await makeHashPassword(password);
    const result = await comparePasswordAndHash(wrongPassword, hash);

    expect(result).toBe(false);
  });

  test('makeHashPassword should throw an error for invalid data', async () => {
    await expect(makeHashPassword(null)).rejects.toThrow();
    await expect(makeHashPassword(undefined)).rejects.toThrow();
    await expect(makeHashPassword(123)).rejects.toThrow();
  });

  test('comparePasswordAndHash should throw an error if the data is incorrect', async () => {
    const hash = await makeHashPassword(password);

    await expect(comparePasswordAndHash(null, hash)).rejects.toThrow();
    await expect(comparePasswordAndHash(password, null)).rejects.toThrow();
  });
});
