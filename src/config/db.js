require('dotenv').config();

const { validDbConfig } = require('./_validations/db');

const dbConfig = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'your_db_password',
  database: process.env.DB_NAME || 'book-directory',
  schema: process.env.DB_SCHEMA || 'public',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,

  dialect: process.env.DB_DIALECT || 'postgres',
  logMode: process.env.DB_QUERY_LOG === 'true',
  minPoolConnection: +process.env.MIN_POOL_CONNECTION || 0,
  maxPoolConnection: +process.env.MAX_POOL_CONNECTION || 10,

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
