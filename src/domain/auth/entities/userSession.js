class UserSession {
  constructor(
    { id, name, email, roleId, updatedAt, createdAt },
    role,
    permissions,
    refreshToken
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.refreshToken = refreshToken;
    this.roleId = roleId;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
    this.role = role;
    this.permissions = permissions;
  }
}

module.exports = {
  UserSession,
};
