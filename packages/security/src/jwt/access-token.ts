import { SignJWT } from 'jose';

import { SECURITY_CONSTANTS } from '../constants.js';

import type { AccessTokenPayload } from './types.js';

function getSecret(): Uint8Array {
  const secret = process.env.JWT_ACCESS_SECRET;

  if (!secret) {
    throw new Error('JWT_ACCESS_SECRET is not configured');
  }

  return new TextEncoder().encode(secret);
}

export async function generateAccessToken(payload: AccessTokenPayload): Promise<string> {
  return new SignJWT({
    email: payload.email,

    roles: payload.roles,

    permissions: payload.permissions,

    tokenType: payload.tokenType,
  })

    .setProtectedHeader({
      alg: 'HS256',
      typ: 'JWT',
    })

    .setSubject(payload.sub)

    .setIssuer(SECURITY_CONSTANTS.JWT_ISSUER)

    .setAudience(SECURITY_CONSTANTS.JWT_AUDIENCE)

    .setIssuedAt()

    .setExpirationTime(SECURITY_CONSTANTS.ACCESS_TOKEN_EXPIRY)

    .sign(getSecret());
}
