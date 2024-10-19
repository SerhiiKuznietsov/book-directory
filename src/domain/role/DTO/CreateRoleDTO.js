class CreateRoleDTO {
  constructor({ name }) {
    this.name = name;
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }
}

module.exports = {
  CreateRoleDTO,
};
