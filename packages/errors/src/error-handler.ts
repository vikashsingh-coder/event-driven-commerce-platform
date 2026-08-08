import type { ErrorRequestHandler } from 'express';

import { AppError } from './app-error.js';

import { ERROR_CODES } from './error-codes.js';

import { createErrorResponse } from './error-response.js';

export const errorHandler: ErrorRequestHandler = (error, request, response, _next) => {
  const requestId = request.headers['x-request-id'];

  if (error instanceof AppError) {
    response.status(error.statusCode).json(
      createErrorResponse({
        code: error.code,
        message: error.message,
        statusCode: error.statusCode,
        details: error.details,
        requestId: typeof requestId === 'string' ? requestId : undefined,
      }),
    );

    return;
  }

  console.error(error);

  response.status(500).json(
    createErrorResponse({
      code: ERROR_CODES.INTERNAL_SERVER_ERROR,

      message: 'Internal server error',

      statusCode: 500,

      requestId: typeof requestId === 'string' ? requestId : undefined,
    }),
  );
};
