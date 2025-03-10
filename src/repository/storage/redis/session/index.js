const makeKey = (sessionId) => `session:${sessionId}`;
const SESSION_TTL = 7 * 24 * 60 * 60;

class SessionRepository {
  constructor(storage) {
    this._storage = storage;
  }

  async getById(sessionId) {
    const key = makeKey(sessionId);
    const storageData = await this._storage.instance.get(key);

    const result = storageData ? JSON.parse(storageData) : undefined;

    return result;
  }

  async create(sessionId, value) {
    const key = makeKey(sessionId);
    const storageData = JSON.stringify(value);

    const result = await this._storage.instance.setEx(
      key,
      SESSION_TTL,
      storageData
    );

    return !!result;
  }

  async remove(sessionId) {
    const key = makeKey(sessionId);
    const isDeleted = await this._storage.instance.del(key);

    return !!isDeleted;
  }
}

module.exports = {
  SessionRepository,
};
