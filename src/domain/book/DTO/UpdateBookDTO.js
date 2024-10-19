class UpdateBookDTO {
  constructor({ title }) {
    this.title = title;
    this.updatedAt = new Date();
  }
}

module.exports = {
  UpdateBookDTO,
};
