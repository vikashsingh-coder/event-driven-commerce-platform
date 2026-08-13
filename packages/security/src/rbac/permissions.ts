export const PERMISSIONS = {
  PRODUCT_READ: 'product:read',

  PRODUCT_CREATE: 'product:create',

  PRODUCT_UPDATE: 'product:update',

  PRODUCT_DELETE: 'product:delete',

  ORDER_READ: 'order:read',

  ORDER_CREATE: 'order:create',

  ORDER_UPDATE: 'order:update',

  ORDER_CANCEL: 'order:cancel',

  INVENTORY_READ: 'inventory:read',

  INVENTORY_UPDATE: 'inventory:update',

  PAYMENT_READ: 'payment:read',

  PAYMENT_REFUND: 'payment:refund',

  USER_READ: 'user:read',

  USER_UPDATE: 'user:update',

  ANALYTICS_READ: 'analytics:read',
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
