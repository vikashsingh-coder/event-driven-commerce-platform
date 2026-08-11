import amqp, { type Channel, type ChannelModel } from 'amqplib';

export class RabbitMQConnection {
  private connection: ChannelModel | null = null;

  private channel: Channel | null = null;

  async connect(url: string): Promise<void> {
    if (this.connection && this.channel) {
      return;
    }

    this.connection = await amqp.connect(url);

    this.connection.on('error', (error) => {
      console.error('RabbitMQ connection error', error);
    });

    this.connection.on('close', () => {
      this.connection = null;

      this.channel = null;
    });

    this.channel = await this.connection.createChannel();
  }

  getChannel(): Channel {
    if (!this.channel) {
      throw new Error('RabbitMQ channel is not initialized');
    }

    return this.channel;
  }

  async close(): Promise<void> {
    if (this.channel) {
      await this.channel.close();

      this.channel = null;
    }

    if (this.connection) {
      await this.connection.close();

      this.connection = null;
    }
  }
}
