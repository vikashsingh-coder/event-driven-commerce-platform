import type { Channel } from 'amqplib';

import type { BaseEvent } from '../types/event.js';

import type { PublishOptions } from './types.js';

export class EventPublisher {
  constructor(private readonly channel: Channel) {}

  async publish<T extends BaseEvent>(event: T, options: PublishOptions): Promise<boolean> {
    await this.channel.assertExchange(options.exchange, 'topic', {
      durable: true,
    });

    const message = Buffer.from(JSON.stringify(event));

    return this.channel.publish(options.exchange, options.routingKey, message, {
      persistent: options.persistent ?? true,

      contentType: 'application/json',

      messageId: event.metadata.eventId,

      timestamp: Date.now(),

      headers: {
        eventType: event.type,

        eventVersion: event.metadata.version,

        correlationId: event.metadata.correlationId,
      },
    });
  }
}
