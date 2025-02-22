const { CustomError } = require('../../../../utils/error');
const { createRedisInstance } = require('./instance');

class Storage {
  constructor(config, logger) {
    this.instance = createRedisInstance(config);
    this.logger = logger;
  }

  async isOpenConnection() {
    try {
      await this.instance.ping();
      this.logger.info('Redis connection active');

      return true;
    } catch (e) {
      this.logger.error('There is no Redis connection:', e.message);

      return false;
    }
  }

  async connect() {
    try {
      await this.instance.connect();

      this.logger.info('Redis connected');
    } catch (e) {
      throw new CustomError(
        `Unable to connect to the redis: ${this.instance.config.database}`,
        ERROR_TYPES.UNKNOWN_ERROR
      ).setCause(e);
    }
  }

  async disconnect() {
    await this.instance.disconnect();
    this.logger.info('Redis disconnected');
  }
}

module.exports = {
  Storage,
};
