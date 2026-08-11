export type { BaseEvent } from './types/event.js';

export type { EventMetadata } from './types/metadata.js';

export type {
  EcommerceEvent,
  OrderCreatedEvent,
  InventoryReservedEvent,
  InventoryReservationFailedEvent,
  PaymentStartedEvent,
  PaymentCompletedEvent,
  PaymentFailedEvent,
  NotificationRequestedEvent,
  OrderCompletedEvent,
} from './types/events.js';

export { EVENT_TYPES, EVENT_VERSION } from './constants.js';

export {
  generateEventId,
  generateCorrelationId,
  generateIdempotencyKey,
} from './utils/event-id.js';

export { RabbitMQConnection, EventPublisher, EventConsumer } from './rabbitmq/index.js';

export type { ConsumerHandler, PublishOptions, ConsumeOptions } from './rabbitmq/index.js';
