require('dotenv').config();

module.exports = {
  host: process.env.APP_HOST || '127.0.0.1',
  port: Number(process.env.APP_PORT) || 80,
};
