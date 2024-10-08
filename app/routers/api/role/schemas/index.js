const getListSchema = require('./getList');
const getSchema = require('./getSingle');
const createSchema = require('./create');
const updateSchema = require('./update');
const removeSchema = require('./remove');

module.exports = {
  getListSchema,
  getSchema,
  createSchema,
  updateSchema,
  removeSchema,
};
