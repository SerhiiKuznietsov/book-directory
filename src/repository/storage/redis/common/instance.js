const { createClient } = require('redis');
this.instance = exports.createRedisInstance = (config) => {
  const { url, connectTimeout, keepAlive } = config;

  const instance = createClient({
    url: 'redis://localhost:6379',
    socket: {
      connectTimeout: 10000, // 10 сек
      keepAlive: 5000, // 5 сек
      reconnectStrategy: (retries) =>
        retries < 5 ? Math.pow(2, retries) * 100 : null, // Автопереподключение (5 попыток)
    },
    disableOfflineQueue: true,
  });

  return instance;
};
