import { PERMISSIONS, type Permission } from './permissions.js';

import { ROLES, type Role } from './roles.js';

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [ROLES.CUSTOMER]: [
    PERMISSIONS.PRODUCT_READ,

    PERMISSIONS.ORDER_READ,

    PERMISSIONS.ORDER_CREATE,

    PERMISSIONS.ORDER_CANCEL,
  ],

  [ROLES.SUPPORT]: [
    PERMISSIONS.PRODUCT_READ,

    PERMISSIONS.ORDER_READ,

    PERMISSIONS.ORDER_UPDATE,

    PERMISSIONS.USER_READ,
  ],

  [ROLES.MANAGER]: [
    PERMISSIONS.PRODUCT_READ,

    PERMISSIONS.PRODUCT_CREATE,

    PERMISSIONS.PRODUCT_UPDATE,

    PERMISSIONS.ORDER_READ,

    PERMISSIONS.ORDER_UPDATE,

    PERMISSIONS.INVENTORY_READ,

    PERMISSIONS.INVENTORY_UPDATE,

    PERMISSIONS.ANALYTICS_READ,
  ],

  [ROLES.ADMIN]: [...Object.values(PERMISSIONS)],
};

export function hasPermission(roles: Role[], permission: Permission): boolean {
  return roles.some((role) => ROLE_PERMISSIONS[role]?.includes(permission));
}

export function hasAnyPermission(roles: Role[], permissions: Permission[]): boolean {
  return permissions.some((permission) => hasPermission(roles, permission));
}

export function hasAllPermissions(roles: Role[], permissions: Permission[]): boolean {
  return permissions.every((permission) => hasPermission(roles, permission));
}
