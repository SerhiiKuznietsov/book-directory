const { createClient } = require("redis");

const redisClient = createClient();

exports.createRedisConnection = async () => {
  try {
    const redisConnection = await redisClient.connect();

    console.log("Redis connected");

    return redisConnection;
  } catch (e) {
    console.error("Redis connection error:", e);

    throw e;
  }
};
