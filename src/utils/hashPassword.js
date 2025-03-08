const bcrypt = require('bcryptjs');
const saltRounds = 10;

const makeHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const compareHash = async (hash1, hash2) => {
  const result = await bcrypt.compare(hash1, hash2);

  return result;
};

const comparePasswordAndHash = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);

  return result;
};

module.exports = {
  makeHashPassword,
  compareHash,
  comparePasswordAndHash,
};
