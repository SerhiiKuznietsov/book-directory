const Joi = require('joi');
const { vld } = require('../../utils/validator-wrapper');
const { LOG_LEVELS_LIST } = require('../../constants/logger');

exports.validLoggerConfig = vld((config) => {
  const { error } = Joi.object({
    level: Joi.string().valid(...LOG_LEVELS_LIST),
  })
    .required()
    .validate(config);

  if (error) throw error;
});
