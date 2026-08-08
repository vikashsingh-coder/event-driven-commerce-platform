import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('development'),

  PORT: z.string().default('4000').transform(Number),

  SERVICE_NAME: z.string().default('unknown-service'),

  DATABASE_URL: z.string().optional(),

  MONGODB_URL: z.string().optional(),

  REDIS_URL: z.string().optional(),

  RABBITMQ_URL: z.string().optional(),

  JWT_SECRET: z.string().optional(),

  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),

  JWT_REFRESH_EXPIRES_IN: z.string().default('30d'),

  STRIPE_SECRET_KEY: z.string().optional(),

  RAZORPAY_KEY_ID: z.string().optional(),

  RAZORPAY_SECRET: z.string().optional(),

  SMTP_HOST: z.string().optional(),

  SMTP_PORT: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : undefined)),

  SMTP_USER: z.string().optional(),

  SMTP_PASSWORD: z.string().optional(),
});
