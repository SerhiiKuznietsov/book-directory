require('dotenv').config();
const { validDbConfig } = require('../validations/config/db');

const dbConfig = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'book-directory',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || 'postgres',
  migrationStorageTableSchema: '_migration',
  migrationStorageTableName: '_migration_meta',
  seederStorage: 'sequelize',
  seederStorageTableName: '_seeder_meta',
  seederStorageTableSchema: '_migration',
};

module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: dbConfig,
};

validDbConfig(module.exports);
