const { validAndCompileSchema } = require('../../utils/ajv-validator');

const lowerStrType = {
  type: 'string',
  pattern: '^[a-z_]+$',
};

exports.validDbConfig = (config) => {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: [
      'username',
      'password',
      'database',
      'host',
      'port',
      'dialect',
      'logMode',
      'migrationStorageTableSchema',
      'migrationStorageTableName',
      'seederStorage',
      'seederStorageTableName',
      'seederStorageTableSchema',
    ],
    properties: {
      username: lowerStrType,
      password: { type: 'string' },
      database: { type: 'string' },
      host: { type: 'string' },
      port: { type: 'integer' },
      dialect: { type: 'string' },
      logMode: { type: 'boolean' },
      migrationStorageTableSchema: lowerStrType,
      migrationStorageTableName: lowerStrType,
      seederStorage: { type: 'string' },
      seederStorageTableName: lowerStrType,
      seederStorageTableSchema: lowerStrType,
    },
  };

  validAndCompileSchema(schema, config);
};
