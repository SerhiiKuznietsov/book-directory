class CreateUserDTO {
  constructor({ name, email, roleId }) {
    this.name = name;
    this.email = email;
    this.roleId = roleId;
  }
}

module.exports = {
  CreateUserDTO,
};
