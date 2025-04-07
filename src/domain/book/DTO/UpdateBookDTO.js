class UpdateBookDTO {
  constructor({ title, description, publisher, publishedAt, pageCount }) {
    this.title = title;
    this.description = description;
    this.publisher = publisher;
    this.publishedAt = publishedAt;
    this.pageCount = pageCount;
  }
}

module.exports = {
  UpdateBookDTO,
};
