const makeKey = (sessionId) => `session:${sessionId}`;

class SessionRepository {
  constructor(storage) {
    this._storage = storage;
  }

  async add(sessionId, value) {
    const key = makeKey(sessionId);
    const data = JSON.stringify(value);

    const result = await this._storage.instance.set(key, data);

    return result;
  }

  async get(sessionId) {
    const key = makeKey(sessionId);

    const storageData = await this._storage.instance.get(key);

    const result = JSON.parse(storageData);

    return result;
  }
}

module.exports = {
  SessionRepository,
};
