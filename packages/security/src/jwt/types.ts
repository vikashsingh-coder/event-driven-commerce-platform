export interface AccessTokenPayload {
  sub: string;

  email: string;

  roles: string[];

  permissions: string[];

  tokenType: 'access';
}

export interface RefreshTokenPayload {
  sub: string;

  sessionId: string;

  tokenType: 'refresh';
}
