const { db: dbConfig, redis: storageConfig } = require('./config');
const { initAppContainer } = require('./container/appContainer');

class App {
  constructor(server, logger) {
    this._server = server;
    this._logger = logger;
    this._isActive = false;
  }

  async start() {
    if (this._isActive) return;

    try {
      this._container = initAppContainer(this._logger, dbConfig, storageConfig);

      await this._container.get('db.postgres').connect();
      await this._container.get('db.redis').connect();

      await this._server.init(this._container);
      await this._server.listen();

      this._isActive = true;
      this._logger.info('App started...');
    } catch (e) {
      this._logger.error(`Failed to start app: ${e.message}`);
      this._logger.error(e);
      process.exit(1);
    }
  }

  async stop() {
    if (!this._isActive) return;

    try {
      await this._container.get('db.postgres').disconnect();
      await this._container.get('db.redis').disconnect();
      await this._server.close();

      this._isActive = false;
      this._logger.info('App stopped...');
    } catch (e) {
      this._logger.error('Error while stopping app');
      this._logger.error(e);
      process.exit(1);
    }
  }
}

module.exports = { App };
