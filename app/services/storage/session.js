const { createRedisConnection } = require("./redis");

let connection;

exports.init = async () => {
  connection = await createRedisConnection();
};

const makeKey = (sessionId) => {
  return `session:${sessionId}`;
}

exports.getSession = async (sessionId) => {
  await connection.get(makeKey(sessionId));
};
exports.addSession = async (sessionId, value) => {
  await connection.set(makeKey(sessionId), value);
};