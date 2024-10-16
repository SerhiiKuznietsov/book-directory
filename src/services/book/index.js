const { getBooksList } = require('./list');
const { getBookById } = require('./single');
const { createBook } = require('./create');
const { updateBook } = require('./update');
const { removeBook } = require('./remove');

module.exports = {
  getBooksList,
  getBookById,
  createBook,
  updateBook,
  removeBook,
};
