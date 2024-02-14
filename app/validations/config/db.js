const Joi = require("joi");
const { vld } = require("../../utils/validator-wrapper");

const validDbConfig = (dbConfig) => {
  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
    host: Joi.string().required(),
    port: Joi.number().required(),
    dialect: Joi.string().required(),
  }).validate(dbConfig);

  if (error) throw error;
};

exports.validDbConfig = vld((config) => {
  // TODO - fixed validator
  // const { development, test, production } = config;

  // validDbConfig(development);
  // validDbConfig(test);
  // validDbConfig(production);
});
