const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const {
  MIN_LIMIT_LENGHT,
  MAX_LIMIT_LENGHT,
  DEFAULT_LIMIT_LENGHT,
  DEFAULT_PAGE_LENGHT,
} = require("../constants/db-query");

const queryStaticParamsShema = Joi.object({
  limit: Joi.number()
    .min(MIN_LIMIT_LENGHT)
    .max(MAX_LIMIT_LENGHT)
    .integer()
    .default(DEFAULT_LIMIT_LENGHT),
  page: Joi.number().positive().integer().default(DEFAULT_PAGE_LENGHT),
  order: Joi.array().items(Joi.string().trim()),
  nested: Joi.object(), // TODO - add details validation
  attrs: Joi.array().items(Joi.string().trim()),
});

exports.validStaticParams = vld((query) => {
  const { error, value } = queryStaticParamsShema.validate(query);

  if (error) throw error;

  return value;
});
