import type { Request } from 'express';

import type { ZodType } from 'zod';

import { ValidationError } from '@ecommerce/errors';

import type { ValidationTarget } from './types.js';

import { VALIDATED_DATA } from './middleware.js';

export function validateRequest<T>(schema: ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new ValidationError('Request validation failed', result.error.flatten());
  }

  return result.data;
}

export function getValidatedData<T>(request: Request, target: ValidationTarget): T {
  const data = (request as any)[VALIDATED_DATA]?.[target];

  return data as T;
}
