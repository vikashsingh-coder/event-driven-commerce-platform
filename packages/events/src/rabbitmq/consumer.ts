import type { Channel, ConsumeMessage } from 'amqplib';

import type { EcommerceEvent } from '../types/events.js';

export interface ConsumerHandler {
  (event: EcommerceEvent, message: ConsumeMessage): Promise<void>;
}

export class EventConsumer {
  constructor(private readonly channel: Channel) {}

  async subscribe(
    queue: string,
    exchange: string,
    routingKeys: string[],
    handler: ConsumerHandler,
    prefetch = 10,
  ): Promise<void> {
    await this.channel.assertExchange(exchange, 'topic', {
      durable: true,
    });

    await this.channel.assertQueue(queue, {
      durable: true,
    });

    for (const routingKey of routingKeys) {
      await this.channel.bindQueue(queue, exchange, routingKey);
    }

    await this.channel.prefetch(prefetch);

    await this.channel.consume(
      queue,

      async (message) => {
        if (!message) {
          return;
        }

        try {
          const event = JSON.parse(message.content.toString()) as EcommerceEvent;

          await handler(event, message);

          this.channel.ack(message);
        } catch (error) {
          console.error('Event processing failed', error);

          this.channel.nack(message, false, false);
        }
      },
    );
  }
}
