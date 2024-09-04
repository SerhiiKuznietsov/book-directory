const { LOG_LEVELS_LIST } = require('../../constants/logger');
const { validAndCompileSchema } = require('../../utils/ajv-validator');

exports.validLoggerConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['level'],
    properties: {
      level: { type: 'string', enum: LOG_LEVELS_LIST },
    },
  };

  validAndCompileSchema(schema, config);
};
