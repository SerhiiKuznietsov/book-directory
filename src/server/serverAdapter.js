class ServerAdapter {
  get isActive() {
    throw new Error('isActive() must be implemented');
  }
  async init() {
    throw new Error('init() must be implemented');
  }
  async listen() {
    throw new Error('listen() must be implemented');
  }
  async close() {
    throw new Error('close() must be implemented');
  }
}

module.exports = {
  ServerAdapter,
};
