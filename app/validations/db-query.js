const Joi = require('joi');
const { vld } = require('../utils/validator-wrapper');
const {
  MIN_LIMIT_LENGTH,
  MAX_LIMIT_LENGTH,
  DEFAULT_LIMIT_LENGTH,
  DEFAULT_PAGE_LENGTH,
} = require('../constants/db-query');

const queryStaticParamsSchema = Joi.object({
  limit: Joi.number()
    .min(MIN_LIMIT_LENGTH)
    .max(MAX_LIMIT_LENGTH)
    .integer()
    .default(DEFAULT_LIMIT_LENGTH),
  page: Joi.number().positive().integer().default(DEFAULT_PAGE_LENGTH),
  order: Joi.array().items(Joi.string().trim()),
  nested: Joi.object(), // TODO - add details validation
  attrs: Joi.array().items(Joi.string().trim()),
});

exports.validStaticParams = vld((query) => {
  const { error, value } = queryStaticParamsSchema.validate(query);

  if (error) throw error;

  return value;
});
