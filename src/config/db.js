require('dotenv').config();
const { validDbConfig } = require('./_validations/db');

const dbConfig = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'book-directory',
  schema: 'public',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || 'postgres',
  minPoolConnection: 0,
  maxPoolConnection: 10,
  logMode: process.env.DB_QUERY_LOG === 'true',
  migrationStorageTableSchema: '_migration',
  migrationStorageTableName: '_migration_meta',
  seederStorage: 'sequelize',
  seederStorageTableName: '_seeder_meta',
  seederStorageTableSchema: '_migration',
};

module.exports = {
  development: dbConfig, // this code is needed for sequilize-cli
  test: dbConfig, // this code is needed for sequilize-cli
  production: dbConfig, // this code is needed for sequilize-cli
  ...dbConfig,
};

validDbConfig(module.exports);
