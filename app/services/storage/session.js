const { getStorage } = require('./index');

const defaultStorage = getStorage();

const makeKey = (sessionId) => `session:${sessionId}`;

exports.getSession = async (sessionId) => {
  const storageData = await defaultStorage.get(makeKey(sessionId));

  return JSON.parse(storageData);
};
exports.addSession = (sessionId, value) => {
  return defaultStorage.set(makeKey(sessionId), JSON.stringify(value));
};
