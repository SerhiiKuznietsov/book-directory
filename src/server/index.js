const fastify = require('fastify');
const { randomUUID } = require('node:crypto');
const { ServerAdapter } = require('./serverAdapter');
const ajv = require('./ajv');
const { initApi } = require('../api');

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
      this._logger.error('server initialization error', e);
      throw e;
    }
  }

  async listen() {
    try {
      await this._instance.listen({ port: this._port, host: this._host });
    } catch (e) {
      this._logger.error('server listening start error', e);
      throw e;
    }
  }

  async close() {
    try {
      await this._instance.close();
    } catch (e) {
      this._logger.error('server listening closure error', e);
      throw e;
    }
  }
}

module.exports = { FastifyServer };
