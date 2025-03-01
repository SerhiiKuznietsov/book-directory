const fastify = require('fastify');
const { randomUUID } = require('node:crypto');
const { ServerAdapter } = require('./serverAdapter');
const ajv = require('./ajv');
const { initApi } = require('../api');
const { CustomError } = require('../utils/error');

class FastifyServer extends ServerAdapter {
  constructor(host, port, logger) {
    super();
    this._host = host;
    this._port = port;
    this._logger = logger;
    this._instance = fastify({
      loggerInstance: logger,
      ajv,
      genReqId: () => randomUUID(),
    });
  }

  async init(initData) {
    try {
      await initApi(this._instance, initData);
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
    } catch (e) {
      this._logger.error(
        new CustomError('server listening closure error').setCause(e)
      );
      throw e;
    }
  }
}

module.exports = { FastifyServer };
