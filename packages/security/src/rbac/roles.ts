export const ROLES = {
  CUSTOMER: 'customer',

  ADMIN: 'admin',

  MANAGER: 'manager',

  SUPPORT: 'support',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
