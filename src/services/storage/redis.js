const { createClient } = require('redis');
const { logger } = require('../../utils/logger');
const { CustomError } = require('../../utils/error');

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
      throw new CustomError('redis connection already exists');
    }
    await this.#client.connect();
    logger.info('Redis connected');
  }

  async disconnect() {
    if (!this.#client.isOpen) {
      throw new CustomError('redis connection already disconnect');
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
