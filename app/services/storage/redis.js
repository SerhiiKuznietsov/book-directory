const { createClient } = require('redis');
const { logger } = require('../../utils/logger');

const redisClient = createClient();

exports.createRedisConnection = async () => {
  const redisConnection = await redisClient.connect();
  logger.info('Redis connected');

  return redisConnection;
};
