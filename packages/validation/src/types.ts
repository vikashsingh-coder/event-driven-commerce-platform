import type { ZodType } from 'zod';

export type ValidationTarget = 'body' | 'query' | 'params' | 'headers';

export type ValidationSchema = ZodType;
