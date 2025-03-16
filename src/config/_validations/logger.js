const { LEVELS_LIST } = require('../../constants/logger');
const { validAndCompileSchema } = require('../../utils/ajvValidator');

exports.validLoggerConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['level'],
    properties: {
      level: { type: 'string', enum: LEVELS_LIST },
    },
  };

  validAndCompileSchema(schema, config);
};
