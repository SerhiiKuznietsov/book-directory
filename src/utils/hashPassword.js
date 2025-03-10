const bcrypt = require('bcryptjs');
const saltRounds = 10;

const makeHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const comparePasswordAndHash = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);

  return result;
};

module.exports = {
  makeHashPassword,
  comparePasswordAndHash,
};
