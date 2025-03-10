class SignOutDTO {
  constructor(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}

module.exports = {
  SignOutDTO,
};
