const { createClient } = require('redis');
const { logger } = require('../../../utils/logger');
const { CustomError } = require('../../../utils/error');
const { ERROR_TYPES } = require('../../../constants/error');

class Redis {
  #client;

  constructor(config) {
    this.#client = createClient(config);
  }

  isOpenConnection() {
    return this.#client.isOpen;
  }

  async connect() {
    if (this.#client.isOpen) {
      throw new CustomError(
        'redis connection already exists',
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }
    await this.#client.connect();
    logger.info('Redis connected');
  }

  async disconnect() {
    if (!this.#client.isOpen) {
      throw new CustomError(
        'redis connection already disconnect',
        ERROR_TYPES.UNKNOWN_ERROR
      );
    }

    await this.#client.disconnect();
    logger.info('Redis disconnected');
  }

  get(key) {
    return this.#client.get(key);
  }

  set(key, value) {
    return this.#client.set(key, value);
  }
}

module.exports = {
  Redis,
};
