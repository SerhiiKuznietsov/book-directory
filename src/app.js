const { db: dbConfig, redis: storageConfig } = require('./config');
const { initAppContainer } = require('./container/appContainer');

class App {
  constructor(server, logger) {
    this._server = server;
    this._logger = logger.child({ context: App.name });
  }

  async start() {
    if (this._server.isActive) return;

    try {
      this._container = initAppContainer(this._logger, dbConfig, storageConfig);

      await this._container.get('db.postgres').connect();
      await this._container.get('db.redis').connect();

      await this._server.init(this._container);
      await this._server.listen();

      this._logger.info('App started...');
    } catch (e) {
      this._logger.error(e, `Failed to start app`);
      process.exit(1);
    }
  }

  async stop() {
    if (!this._server.isActive) return;

    try {
      await this._container.get('db.postgres').disconnect();
      await this._container.get('db.redis').disconnect();

      await this._server.close();

      this._logger.info('App stopped...');
    } catch (e) {
      this._logger.error(e, 'Error while stopping app');
    }
  }
}

module.exports = { App };
