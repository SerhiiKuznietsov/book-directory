class UpdateUserDTO {
  constructor({ name, email, roleId }) {
    this.name = name;
    this.email = email;
    this.roleId = roleId;
    this.updatedAt = new Date();
  }
}

module.exports = { UpdateUserDTO };
