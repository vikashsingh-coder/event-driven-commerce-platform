import type { EventMetadata } from './metadata.js';

export interface BaseEvent<TType extends string = string, TPayload = unknown> {
  type: TType;

  metadata: EventMetadata;

  payload: TPayload;
}
