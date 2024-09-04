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
