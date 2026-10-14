import Redis from 'ioredis';

export interface RedisConfig {
  url: string;
}

export function createRedisClient(config: RedisConfig): Redis {
  const client = new Redis(config.url, {
    maxRetriesPerRequest: 3,

    enableReadyCheck: true,

    retryStrategy(times) {
      const delay = Math.min(times * 100, 2000);

      return delay;
    },
  });

  return client;
}
