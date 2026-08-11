export interface EventMetadata {
  eventId: string;

  correlationId: string;

  causationId?: string;

  source: string;

  timestamp: string;

  version: number;

  traceId?: string;

  idempotencyKey?: string;
}
