const makeKey = (sessionId) => `session:${sessionId}`;

class SessionRepository {
  constructor(storage) {
    this._storage = storage;
  }

  async getById(sessionId) {
    const key = makeKey(sessionId);
    const storageData = await this._storage.instance.get(key);

    const result = JSON.parse(storageData);

    return result;
  }

  async create(sessionId, value) {
    const key = makeKey(sessionId);
    const storageData = JSON.stringify(value);

    const result = await this._storage.instance.set(key, storageData);

    return result;
  }
}

module.exports = {
  SessionRepository,
};
