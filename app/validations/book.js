const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } = require("../constants/book");
const bookIdSchema = Joi.number().positive().required();
const bookItemSchema = Joi.object({
  title: Joi.string().min(MIN_TITLE_LENGTH).max(MAX_TITLE_LENGTH),
}).required();

const validBookId = (id) => {
  const { error } = bookIdSchema.validate(id);

  if (error) throw error;
};

const validBookItem = (bookItem) => {
  const { error } = bookItemSchema.validate(bookItem);

  if (error) throw error;
};

exports.validBookCreate = vld(validBookItem);
exports.validBookRemove = vld(validBookId);
exports.validBookUpdate = vld((id, bookItem) => {
  validBookId(id);
  validBookItem(bookItem);
});
