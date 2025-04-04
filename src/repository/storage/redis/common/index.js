const { CustomError } = require('../../../../utils/error');
const { createRedisInstance } = require('./instance');

class Storage {
  constructor(config, logger) {
    this.instance = createRedisInstance(config);
    this._logger = logger.child({ context: this.constructor.name });
  }

  async isOpenConnection() {
    try {
      await this.instance.ping();
      this._logger.info('Redis connection active');

      return true;
    } catch (e) {
      this._logger.error(e, 'there is no Redis connection');

      return false;
    }
  }

  async connect() {
    try {
      await this.instance.connect();

      this._logger.info('Redis connected');
    } catch (e) {
      throw new CustomError(
        `Unable to connect to the redis: ${this.instance.config.database}`,
        ERROR_TYPES.UNKNOWN_ERROR
      ).setCause(e);
    }
  }

  async disconnect() {
    await this.instance.disconnect();
    this._logger.info('Redis disconnected');
  }
}

module.exports = {
  Storage,
};
