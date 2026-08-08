import { logger } from './src/index.js';

logger.info(
  {
    userId: '123',
  },
  'Logger working',
);

logger.error(
  {
    error: 'Database failed',
  },
  'Test error',
);
