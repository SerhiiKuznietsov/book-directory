const { create } = require("./create");
const { getList } = require("./list");
const { remove } = require("./remove");
const { getSingle } = require("./single");
const { update } = require("./update");

module.exports = {
  getList,
  getSingle,
  create,
  update,
  remove,
};
