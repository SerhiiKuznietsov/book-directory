class AuthControllers {
  constructor(signIn, signOut, register, refreshToken) {
    this.signIn = signIn.handle;
    this.signOut = signOut.handle;
    this.register = register.handle;
    this.refreshToken = refreshToken.handle;
  }
}

module.exports = {
  AuthControllers,
};
