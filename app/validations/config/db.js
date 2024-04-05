const Joi = require('joi');
const { vld } = require('../../utils/validator-wrapper');

exports.validDbConfig = vld((config) => {
  const schemaDbConfig = Joi.object({
    username: Joi.string().lowercase(),
    password: Joi.string(),
    database: Joi.string(),
    host: Joi.string(),
    port: Joi.number(),
    dialect: Joi.string(),
    logMode: Joi.boolean(),
    migrationStorageTableSchema: Joi.string().lowercase(),
    migrationStorageTableName: Joi.string().lowercase(),
    seederStorage: Joi.string().lowercase(),
    seederStorageTableName: Joi.string().lowercase(),
    seederStorageTableSchema: Joi.string().lowercase(),
  }).required();

  const itemSchema = schemaDbConfig.concat(
    Joi.object({
      development: schemaDbConfig,
      test: schemaDbConfig,
      production: schemaDbConfig,
    }).required()
  );

  const { error } = itemSchema.validate(config, {
    convert: false,
  });

  if (error) throw error;
});
