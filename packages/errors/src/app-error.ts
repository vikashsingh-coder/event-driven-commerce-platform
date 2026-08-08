import type { ErrorCode } from './error-codes.js';

export interface AppErrorOptions {
  code: ErrorCode;
  message: string;
  statusCode: number;
  details?: unknown;
  isOperational?: boolean;
}

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly statusCode: number;
  public readonly details?: unknown;
  public readonly isOperational: boolean;

  constructor(options: AppErrorOptions) {
    super(options.message);

    this.name = 'AppError';

    this.code = options.code;

    this.statusCode = options.statusCode;

    this.details = options.details;

    this.isOperational = options.isOperational ?? true;

    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, this.constructor);
    }
  }
}
