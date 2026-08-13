import bcrypt from 'bcrypt';

import { SECURITY_CONSTANTS } from '../constants.js';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SECURITY_CONSTANTS.PASSWORD_SALT_ROUNDS);
}

export async function comparePassword(password: string, passwordHash: string): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}
