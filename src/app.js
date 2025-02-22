const { db: dbConfig, redis: storageConfig } = require('./config');
const { SequelizeDB } = require('./repository/sequelize/common');
const { Storage } = require('./repository/storage/redis/common');
const { BookContainer } = require('./container/bookContainer');
const { RoleContainer } = require('./container/roleContainer');
const { UserContainer } = require('./container/userContainer');

class App {
  constructor(server, logger) {
    this._server = server;
    this._logger = logger;
    this._isActive = false;
  }

  async start() {
    if (this._isActive) return;

    try {
      this._db = new SequelizeDB(dbConfig, this._logger);
      await this._db.connect();

      this._storage = new Storage(storageConfig, this._logger);
      await this._storage.connect();

      const bookContainer = new BookContainer(this._db);
      const roleContainer = new RoleContainer(this._db);
      const userContainer = new UserContainer(this._db);

      await bookContainer.init();
      await roleContainer.init();
      await userContainer.init();

      const data = {
        bookContainer,
        roleContainer,
        userContainer,
      };

      await this._server.init(data);
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
      await this._db.disconnect();
      await this._storage.disconnect();
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
