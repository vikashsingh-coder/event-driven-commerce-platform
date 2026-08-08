import { NotFoundError, ERROR_CODES, errorHandler } from '@ecommerce/errors';
import express, { NextFunction, Request, Response } from 'express';

export async function getProduct(request: Request, response: Response, next: NextFunction) {
  //   const product = await productService.findById(request.params.id);
  const product = false;

  if (!product) {
    next(new NotFoundError('Product not found', ERROR_CODES.PRODUCT_NOT_FOUND));
  }

  response.json({
    success: true,
    data: product,
  });
}
