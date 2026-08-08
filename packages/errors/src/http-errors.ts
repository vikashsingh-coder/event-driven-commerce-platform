import { ERROR_CODES, type ErrorCode } from './error-codes.js';

import { AppError } from './app-error.js';

export class BadRequestError extends AppError {
  constructor(
    message = 'Bad request',
    code: ErrorCode = ERROR_CODES.BAD_REQUEST,
    details?: unknown,
  ) {
    super({
      code,
      message,
      statusCode: 400,
      details,
    });
  }
}

export class UnauthorizedError extends AppError {
  constructor(
    message = 'Unauthorized',
    code: ErrorCode = ERROR_CODES.UNAUTHORIZED,
    details?: unknown,
  ) {
    super({
      code,
      message,
      statusCode: 401,
      details,
    });
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden', code: ErrorCode = ERROR_CODES.FORBIDDEN, details?: unknown) {
    super({
      code,
      message,
      statusCode: 403,
      details,
    });
  }
}

export class NotFoundError extends AppError {
  constructor(
    message = 'Resource not found',
    code: ErrorCode = ERROR_CODES.NOT_FOUND,
    details?: unknown,
  ) {
    super({
      code,
      message,
      statusCode: 404,
      details,
    });
  }
}

export class ConflictError extends AppError {
  constructor(
    message = 'Resource conflict',
    code: ErrorCode = ERROR_CODES.CONFLICT,
    details?: unknown,
  ) {
    super({
      code,
      message,
      statusCode: 409,
      details,
    });
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation failed', details?: unknown) {
    super({
      code: ERROR_CODES.VALIDATION_ERROR,
      message,
      statusCode: 422,
      details,
    });
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message = 'Too many requests', details?: unknown) {
    super({
      code: ERROR_CODES.RATE_LIMIT_EXCEEDED,
      message,
      statusCode: 429,
      details,
    });
  }
}
