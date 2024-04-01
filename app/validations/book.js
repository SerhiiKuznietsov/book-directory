const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const { MIN_TITLE_LENGHT, MAX_TITLE_LENGHT } = require("../constants/book");

const bookIdShema = Joi.number().positive().required();
const bookItemShema = Joi.object({
  title: Joi.string().min(MIN_TITLE_LENGHT).max(MAX_TITLE_LENGHT),
}).required();

const validBookId = (id) => {
  const { error } = bookIdShema.validate(id);

  if (error) throw error;
};

const validBookItem = (bookItem) => {
  const { error } = bookItemShema.validate(bookItem);

  if (error) throw error;
};

exports.validBookCreate = vld(validBookItem);
exports.validBookRemove = vld(validBookId);
exports.validBookUpdate = vld((id, bookItem) => {
  validBookId(id);
  validBookItem(bookItem);
});
