'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.makeHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};
