const { validAndCompileSchema } = require('../../utils/validator');

exports.validRedisConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['url', 'connectTimeout', 'keepAlive'],
    properties: {
      url: { type: 'string', minLength: 5 },
      connectTimeout: { type: 'integer', minimum: 1 },
      keepAlive: { type: 'integer', minimum: 1 },
    },
  };

  validAndCompileSchema(schema, config);
};
