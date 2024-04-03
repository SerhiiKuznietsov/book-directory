const { slugify, capitalize } = require('underscore.string');

exports.slugify = (val) => slugify(val);

exports.capitalize = (val) => capitalize(val);
