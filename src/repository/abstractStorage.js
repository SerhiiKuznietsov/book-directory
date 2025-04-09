class AbstractStorage {
  isOpenConnection() {
    throw new Error('isOpenConnection() must be implemented');
  }

  connect() {
    throw new Error('connect() must be implemented');
  }

  disconnect() {
    throw new Error('disconnect() must be implemented');
  }
}

module.exports = {
  AbstractStorage,
};
