const { validAndCompileSchema } = require('../../utils/ajvValidator');

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
      schema: { type: 'string' },
      host: { type: 'string' },
      port: { type: 'integer' },
      dialect: { type: 'string' },
      logMode: { type: 'boolean' },
      migrationStorageTableSchema: lowerStrType,
      migrationStorageTableName: lowerStrType,
      seederStorage: { type: 'string' },
      seederStorageTableName: lowerStrType,
      seederStorageTableSchema: lowerStrType,
      minPoolConnection: { type: 'integer', minimum: 0 },
      maxPoolConnection: { type: 'integer', minimum: 1 },
    },
  };

  validAndCompileSchema(schema, config);
};
