export const EVENT_TYPES = {
  ORDER_CREATED: 'order.created',

  INVENTORY_RESERVED: 'inventory.reserved',

  INVENTORY_RESERVATION_FAILED: 'inventory.reservation.failed',

  PAYMENT_STARTED: 'payment.started',

  PAYMENT_COMPLETED: 'payment.completed',

  PAYMENT_FAILED: 'payment.failed',

  NOTIFICATION_REQUESTED: 'notification.requested',

  ORDER_COMPLETED: 'order.completed',
} as const;

export const EVENT_VERSION = 1;
