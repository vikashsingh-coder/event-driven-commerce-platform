import type { BaseEvent } from './event.js';

export interface OrderCreatedPayload {
  orderId: string;

  userId: string;

  totalAmount: number;

  currency: string;

  items: Array<{
    productId: string;
    quantity: number;
    unitPrice: number;
  }>;
}

export type OrderCreatedEvent = BaseEvent<'order.created', OrderCreatedPayload>;

export interface InventoryReservedPayload {
  orderId: string;

  reservationId: string;
}

export type InventoryReservedEvent = BaseEvent<'inventory.reserved', InventoryReservedPayload>;

export interface InventoryReservationFailedPayload {
  orderId: string;

  reason: string;
}

export type InventoryReservationFailedEvent = BaseEvent<
  'inventory.reservation.failed',
  InventoryReservationFailedPayload
>;

export interface PaymentStartedPayload {
  orderId: string;

  paymentId: string;

  amount: number;

  currency: string;
}

export type PaymentStartedEvent = BaseEvent<'payment.started', PaymentStartedPayload>;

export interface PaymentCompletedPayload {
  orderId: string;

  paymentId: string;

  transactionId: string;

  amount: number;

  currency: string;
}

export type PaymentCompletedEvent = BaseEvent<'payment.completed', PaymentCompletedPayload>;

export interface PaymentFailedPayload {
  orderId: string;

  paymentId: string;

  reason: string;
}

export type PaymentFailedEvent = BaseEvent<'payment.failed', PaymentFailedPayload>;

export interface NotificationRequestedPayload {
  userId: string;

  type: string;

  subject: string;

  message: string;
}

export type NotificationRequestedEvent = BaseEvent<
  'notification.requested',
  NotificationRequestedPayload
>;

export interface OrderCompletedPayload {
  orderId: string;

  userId: string;
}

export type OrderCompletedEvent = BaseEvent<'order.completed', OrderCompletedPayload>;

export type EcommerceEvent =
  | OrderCreatedEvent
  | InventoryReservedEvent
  | InventoryReservationFailedEvent
  | PaymentStartedEvent
  | PaymentCompletedEvent
  | PaymentFailedEvent
  | NotificationRequestedEvent
  | OrderCompletedEvent;
