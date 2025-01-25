import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

import userModel from '../models/User';

export const registerHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validation
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      throw createHttpError(400, 'All fields are required');
    }

    if (password.length < 8) {
      throw createHttpError(
        400,
        'Password length must be at least 8 characters long'
      );
    }

    const user = await userModel.create({ name, username, email, password });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
