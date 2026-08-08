import type { RequestHandler } from 'express';

import type { ZodType } from 'zod';

import { ValidationError } from '@ecommerce/errors';

import type { ValidationTarget } from './types.js';

export const VALIDATED_DATA = Symbol('validatedData');

export function validate(target: ValidationTarget, schema: ZodType): RequestHandler {
  return (request, _response, next) => {
    const result = schema.safeParse(request[target]);

    if (!result.success) {
      next(new ValidationError('Request validation failed', result.error.flatten()));

      return;
    }

    const validated = (request as any)[VALIDATED_DATA] ?? {};

    validated[target] = result.data;

    (request as any)[VALIDATED_DATA] = validated;

    next();
  };
}
