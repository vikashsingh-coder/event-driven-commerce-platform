import { randomUUID } from 'node:crypto';

export function generateEventId(): string {
  return `evt_${randomUUID()}`;
}

export function generateCorrelationId(): string {
  return `corr_${randomUUID()}`;
}

export function generateIdempotencyKey(): string {
  return `idem_${randomUUID()}`;
}
