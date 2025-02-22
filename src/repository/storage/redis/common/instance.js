const { createClient } = require('redis');

exports.createRedisInstance = (config) => {
  const { url, connectTimeout, keepAlive } = config;

  const instance = createClient({
    url,
    socket: {
      connectTimeout,
      keepAlive,
      reconnectStrategy: (retries) =>
        retries < 5 ? Math.pow(2, retries) * 100 : null,
    },
    disableOfflineQueue: true,
  });

  return instance;
};
