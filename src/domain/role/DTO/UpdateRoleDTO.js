class UpdateRoleDTO {
  constructor({ name }) {
    this.name = name;
    this.updatedAt = new Date();
  }
}

module.exports = { UpdateRoleDTO };
