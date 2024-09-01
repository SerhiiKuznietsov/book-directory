const Joi = require('joi');
const { vld } = require('../../utils/validator-wrapper');

exports.validServerConfig = vld((config) => {
  const { error } = Joi.object({
    port: Joi.number().positive(),
    REFRESH_TOKEN_SECRET: Joi.string().min(5),
    ACCESS_TOKEN_SECRET: Joi.string().min(5),
    IS_DEV: Joi.boolean(),
    IS_PROD: Joi.boolean(),
    IS_TEST: Joi.boolean(),
  })
    .required()
    .validate(config);

  if (error) throw error;
});
