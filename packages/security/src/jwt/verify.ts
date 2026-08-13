import { jwtVerify } from 'jose';

import { SECURITY_CONSTANTS } from '../constants.js';

function getAccessSecret(): Uint8Array {
  const secret = process.env.JWT_ACCESS_SECRET;

  if (!secret) {
    throw new Error('JWT_ACCESS_SECRET is not configured');
  }

  return new TextEncoder().encode(secret);
}

function getRefreshSecret(): Uint8Array {
  const secret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new Error('JWT_REFRESH_SECRET is not configured');
  }

  return new TextEncoder().encode(secret);
}

export async function verifyAccessToken(token: string) {
  const result = await jwtVerify(token, getAccessSecret(), {
    issuer: SECURITY_CONSTANTS.JWT_ISSUER,

    audience: SECURITY_CONSTANTS.JWT_AUDIENCE,
  });

  if (result.payload.tokenType !== 'access') {
    throw new Error('Invalid token type');
  }

  return result.payload;
}

export async function verifyRefreshToken(token: string) {
  const result = await jwtVerify(token, getRefreshSecret(), {
    issuer: SECURITY_CONSTANTS.JWT_ISSUER,

    audience: SECURITY_CONSTANTS.JWT_AUDIENCE,
  });

  if (result.payload.tokenType !== 'refresh') {
    throw new Error('Invalid token type');
  }

  return result.payload;
}
