import type { ErrorCode } from './error-codes.js';

export interface ErrorResponse {
  success: false;

  error: {
    code: ErrorCode | string;

    message: string;

    statusCode: number;

    details?: unknown;
  };

  requestId?: string;
}

export function createErrorResponse(options: {
  code: ErrorCode | string;
  message: string;
  statusCode: number;
  details?: unknown;
  requestId?: string;
}): ErrorResponse {
  return {
    success: false,

    error: {
      code: options.code,
      message: options.message,
      statusCode: options.statusCode,
      ...(options.details !== undefined && {
        details: options.details,
      }),
    },

    ...(options.requestId && {
      requestId: options.requestId,
    }),
  };
}
