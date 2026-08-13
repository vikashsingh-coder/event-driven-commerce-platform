import { SignJWT, jwtVerify } from 'jose';

export interface ServiceTokenPayload {
  serviceName: string;

  tokenType: 'service';
}

function getSecret(): Uint8Array {
  const secret = process.env.SERVICE_AUTH_SECRET;

  if (!secret) {
    throw new Error('SERVICE_AUTH_SECRET is not configured');
  }

  return new TextEncoder().encode(secret);
}

export async function generateServiceToken(serviceName: string): Promise<string> {
  return new SignJWT({
    serviceName,

    tokenType: 'service',
  })

    .setProtectedHeader({
      alg: 'HS256',
      typ: 'JWT',
    })

    .setIssuer('ecommerce-service')

    .setIssuedAt()

    .setExpirationTime('5m')

    .sign(getSecret());
}

export async function verifyServiceToken(token: string) {
  const result = await jwtVerify(token, getSecret(), {
    issuer: 'ecommerce-service',
  });

  if (result.payload.tokenType !== 'service') {
    throw new Error('Invalid service token');
  }

  return result.payload;
}
