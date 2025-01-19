import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { NODE_ENV } from '../config/env';

export default function errorHandler(
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: error.message,
    errorStack: NODE_ENV === 'development' ? error.stack : '',
  });
}
