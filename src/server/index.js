const fastify = require('fastify');
const { randomUUID } = require('node:crypto');
const { ServerAdapter } = require('./serverAdapter');
const ajv = require('./ajv');
const { initApi } = require('../api');
const { CustomError } = require('../utils/error');

class FastifyServer extends ServerAdapter {
  constructor(config, logger) {
    super();
    this._host = config.host;
    this._port = config.port;
    this._logger = logger.child({ context: FastifyServer.name });
    this._instance = fastify({
      loggerInstance: this._logger,
      ajv,
      genReqId: () => randomUUID(),
    });
  }

  get isActive() {
    return this._instance.server.listening;
  }

  async init(container) {
    try {
      await initApi(this._instance, container);
      this._logger.info('Server initialized');
    } catch (e) {
      this._logger.error(
        new CustomError('server initialization error').setCause(e)
      );
      throw e;
    }
  }

  async listen() {
    try {
      await this._instance.listen({ port: this._port, host: this._host });
      this._logger.info('Server started');
    } catch (e) {
      this._logger.error(
        new CustomError('server listening start error').setCause(e)
      );
      throw e;
    }
  }

  async close() {
    try {
      await this._instance.close();
      this._logger.info('Server stopped');
    } catch (e) {
      this._logger.error(
        new CustomError('server listening closure error').setCause(e)
      );
      throw e;
    }
  }
}

module.exports = { FastifyServer };
