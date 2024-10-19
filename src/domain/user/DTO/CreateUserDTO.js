class CreateUserDTO {
  constructor({ name, email, roleId }) {
    this.name = name;
    this.email = email;
    this.roleId = roleId;
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }
}

module.exports = {
  CreateUserDTO,
};
