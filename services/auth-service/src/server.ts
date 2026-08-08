import { logger } from '@ecommerce/logger';
import { NotFoundError, ERROR_CODES, errorHandler } from '@ecommerce/errors';
import express, { NextFunction, Request, Response } from 'express';
import { getProduct } from './controller/index.js';

const app = express();

app.use(express.json());

// 1. Add 'next' to the route arguments
app.get('/health', (req: Request, res: Response, next: NextFunction) => {
  res.send('OK');
});

app.get('/product', getProduct);

// 3. This line will now have NO TypeScript errors
app.use(errorHandler);

app.listen(3000, () => {
  logger.info('Server listening on port 3000');
});
