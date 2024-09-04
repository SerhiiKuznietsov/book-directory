const Ajv = require('ajv');
const { CustomError } = require('./error');
const { IS_DEV } = require('../config/server');

const ajv = new Ajv({
  allErrors: IS_DEV,
  removeAdditional: 'all',
  coerceTypes: true,
  useDefaults: true,
  strict: true,
  verbose: true,
});

ajv.addFormat('uuid', {
  type: 'string',
  validate: (str) => {
    const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidV4Pattern.test(str);
  }
});

const valid = (validate, data) => {
  validate(data);

  if (validate.errors) {
    const message = JSON.stringify(validate.errors, null, 2);

    throw new CustomError(message);
  }

  return data;
};

const compileSchema = (schema) => ajv.compile(schema);

const validAndCompileSchema = (schema, data) => {
  const validate = compileSchema(schema);

  return valid(validate, data);
};

module.exports = {
  compileSchema,
  validAndCompileSchema,
  valid,
};
