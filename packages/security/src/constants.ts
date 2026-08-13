export const SECURITY_CONSTANTS = {
  ACCESS_TOKEN_EXPIRY: '15m',

  REFRESH_TOKEN_EXPIRY: '7d',

  PASSWORD_SALT_ROUNDS: 12,

  JWT_ISSUER: 'ecommerce-platform',

  JWT_AUDIENCE: 'ecommerce-api',
} as const;
