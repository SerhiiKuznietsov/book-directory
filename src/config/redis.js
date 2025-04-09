require('dotenv').config();

const { validRedisConfig } = require('./_validations/redis');

module.exports = {
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  connectTimeout: +process.env.REDIS_CONNECT_TIMEOUT || 10000,
  keepAlive: +process.env.REDIS_KEEP_ALIVE || 5000,
};

validRedisConfig(module.exports);
