const { validAndCompileSchema } = require('../../utils/validator');

exports.validServerConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['host', 'port'],
    properties: {
      host: { type: 'string' },
      port: { type: 'integer', minimum: 80 },
    },
  };

  validAndCompileSchema(schema, config);
};
