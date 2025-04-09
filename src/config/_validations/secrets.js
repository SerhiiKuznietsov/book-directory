const { validAndCompileSchema } = require('../../utils/validator');

exports.validSecretConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['COOKIE_SECRET', 'ACCESS_TOKEN_SECRET', 'REFRESH_TOKEN_SECRET'],
    properties: {
      COOKIE_SECRET: { type: 'string', minLength: 12 },
      ACCESS_TOKEN_SECRET: { type: 'string', minLength: 12 },
      REFRESH_TOKEN_SECRET: { type: 'string', minLength: 12 },
    },
  };

  validAndCompileSchema(schema, config);
};
