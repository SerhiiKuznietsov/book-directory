const { ERROR_TYPES } = require('../../../constants/error');
const { CustomError } = require('../../../utils/error');
const { createSequelizeInstance } = require('./instance');
const { initModels } = require('./models');

class SequelizeDB {
  constructor(config, logger) {
    this.instance = createSequelizeInstance(config);
    this.logger = logger;
    this.models = this.instance.models;

    initModels(this.instance);
  }

  async isOpenConnection() {
    try {
      await this.instance.authenticate();
      this.logger.info('Database connection active');

      return true;
    } catch (e) {
      this.logger.error('There is no database connection:', e.message);

      return false;
    }
  }

  async connect() {
    try {
      await this.instance.authenticate();
      this.logger.info(
        'Database connection has been established successfully.'
      );
    } catch (e) {
      throw new CustomError(
        `Unable to connect to the database: ${this.instance.config.database}`,
        ERROR_TYPES.UNKNOWN_ERROR
      ).setCause(e);
    }
  }
  async disconnect() {
    await this.instance.close();
  }
}

module.exports = {
  SequelizeDB,
};
