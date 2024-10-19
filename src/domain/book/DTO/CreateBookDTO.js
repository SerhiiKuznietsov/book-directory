class CreateBookDTO {
  constructor({ title }) {
    this.title = title;
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }
}

module.exports = {
  CreateBookDTO,
};
