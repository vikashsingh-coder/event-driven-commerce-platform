import type { RequestHandler } from 'express';

import { randomUUID } from 'node:crypto';

import { runWithContext } from './context.js';

export const requestContextMiddleware: RequestHandler = (request, response, next) => {
  const requestId = request.header('x-request-id') ?? `req_${randomUUID()}`;

  const correlationId = request.header('x-correlation-id') ?? `corr_${randomUUID()}`;

  response.setHeader('x-request-id', requestId);

  response.setHeader('x-correlation-id', correlationId);

  runWithContext(
    {
      requestId,
      correlationId,
    },
    () => next(),
  );
};
