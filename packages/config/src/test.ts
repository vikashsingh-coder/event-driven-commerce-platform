import { env } from './index.js';

console.log({
  environment: env.NODE_ENV,
  service: env.SERVICE_NAME,
  port: env.PORT,
});
