import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
});

export async function getCache(key: string): Promise<string | null> {
  return redis.get(key);
}

export async function setCache(key: string, value: string, ttlSeconds = 300): Promise<void> {
  await redis.setex(key, ttlSeconds, value);
}

export async function delCache(key: string): Promise<void> {
  await redis.del(key);
}

export default redis;
