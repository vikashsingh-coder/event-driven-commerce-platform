import pino from 'pino';

import { env } from '@ecommerce/config';

const isDevelopment = env.NODE_ENV === 'development';

export const logger = pino({
  level: isDevelopment ? 'debug' : 'info',

  base: {
    service: env.SERVICE_NAME,
  },

  timestamp: pino.stdTimeFunctions.isoTime,

  transport: isDevelopment
    ? {
        target: 'pino-pretty',

        options: {
          colorize: true,

          translateTime: 'SYS:standard',
        },
      }
    : undefined,
});
