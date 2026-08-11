export interface PublishOptions {
  exchange: string;

  routingKey: string;

  persistent?: boolean;
}

export interface ConsumeOptions {
  queue: string;

  exchange: string;

  routingKeys: string[];

  prefetch?: number;
}
