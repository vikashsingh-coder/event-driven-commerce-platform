import dotenv from 'dotenv';

import { envSchema } from './schema.js';

dotenv.config();

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error('Invalid environment configuration:');

  console.error(result.error.format());

  process.exit(1);
}

export const env = result.data;

export type Environment = typeof env;
