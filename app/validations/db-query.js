const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const {
  MIN_LIMIT_NUMBER,
  MAX_LIMIT_NUMBER,
  DEFAULT_LIMIT_NUMBER,
  MIN_PAGE_NUMBER,
  DEFAULT_PAGE_NUMBER,
} = require("../constants/db-query");

exports.validStaticParams = vld((query) => {
  const { error, value } = Joi.object({
    limit: Joi.number()
      .min(MIN_LIMIT_NUMBER)
      .max(MAX_LIMIT_NUMBER)
      .integer()
      .default(DEFAULT_LIMIT_NUMBER),
    page: Joi.number()
      .min(MIN_PAGE_NUMBER)
      .integer()
      .default(DEFAULT_PAGE_NUMBER),
    order: Joi.array().items(Joi.string().lowercase().trim()),
  }).validate(query);

  if (error) throw error;

  return value;
});
