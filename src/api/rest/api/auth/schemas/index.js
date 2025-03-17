const signInSchema = require('./signIn');
const signOutSchema = require('./signOut');
const registerSchema = require('./register');
const refreshTokenSchema = require('./refreshToken');

module.exports = {
  signInSchema,
  signOutSchema,
  registerSchema,
  refreshTokenSchema,
};
