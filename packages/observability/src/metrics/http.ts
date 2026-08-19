import type { RequestHandler } from 'express';

import { httpRequestsTotal, httpRequestDuration, httpActiveRequests } from './registry.js';

export const httpMetricsMiddleware: RequestHandler = (request, response, next) => {
  const start = process.hrtime.bigint();

  httpActiveRequests.inc();

  response.on('finish', () => {
    const end = process.hrtime.bigint();

    const duration = Number(end - start) / 1_000_000_000;

    const route = request.route?.path ?? request.path ?? 'unknown';

    const labels = {
      method: request.method,

      route,

      status_code: String(response.statusCode),
    };

    httpRequestsTotal.inc(labels);

    httpRequestDuration.observe(labels, duration);

    httpActiveRequests.dec();
  });

  next();
};
