const { SequelizeFindInterface } = require('../dbQuery');
const { Book } = require('../../db/sequelize');

const bookInterface = new SequelizeFindInterface(Book)
  .setDefaultAttrs('id', 'title')
  .activateRaw();

exports.getBooksList = async (query) => {
  const q = bookInterface.getFindQuery(query);

  const booksList = await Book.findAll(q);

  return booksList;
};
