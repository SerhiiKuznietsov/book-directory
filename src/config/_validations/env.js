const { validAndCompileSchema } = require('../../utils/validator');

exports.validEnvConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['IS_DEV', 'IS_PROD', 'IS_TEST'],
    properties: {
      IS_DEV: { type: 'boolean' },
      IS_PROD: { type: 'boolean' },
      IS_TEST: { type: 'boolean' },
    },
  };

  validAndCompileSchema(schema, config);
};
