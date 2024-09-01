const { signIn, signOut } = require('../../../controllers/auth');

module.exports = async (app) => {
  app.post('/sign-in', signIn);
  app.get('/sign-out', signOut);
};
