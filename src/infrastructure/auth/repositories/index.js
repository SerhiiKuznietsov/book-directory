const { User } = require('../../common/db/sequelize');

const getByEmail = async (email) => {
  const foundUser = await User.findOne({ email, raw: true });

  return foundUser;
};

module.exports = {
  getByEmail,
};
