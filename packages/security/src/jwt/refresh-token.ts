import { SignJWT } from 'jose';

import { SECURITY_CONSTANTS } from '../constants.js';

import type { RefreshTokenPayload } from './types.js';

function getSecret(): Uint8Array {
  const secret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new Error('JWT_REFRESH_SECRET is not configured');
  }

  return new TextEncoder().encode(secret);
}

export async function generateRefreshToken(payload: RefreshTokenPayload): Promise<string> {
  return new SignJWT({
    sessionId: payload.sessionId,

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

    .setExpirationTime(SECURITY_CONSTANTS.REFRESH_TOKEN_EXPIRY)

    .sign(getSecret());
}
