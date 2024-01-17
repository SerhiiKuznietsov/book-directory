const Joi = require('joi');
const { vld } = require('../utils/validator-wrapper');

const validBookItem = (bookItem) => {
  const { error } = Joi.object({
    title: Joi.string().min(1).max(255).required(),
  }).validate(bookItem);

  if (!error) return;

  throw error;
};

const validBookId = (id) => {
  const { error } = Joi.number().validate(id);

  if (!error) return;

  throw error;
};

exports.validBookCreate = vld(validBookItem);

exports.validBookUpdate = vld((id, bookItem) => {
  validBookId(id);
  validBookItem(bookItem);
});

exports.validBookRemove = vld(validBookId);