import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

import userModel from '../models/User';
import { BAD_REQUEST, CREATED, OK, UNAUTHORIZED } from '../constants/http';
import { signToken } from '../utils/jwt';

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

    res.status(CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

export const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    // validation
    if (!username || !password) {
      throw createHttpError(BAD_REQUEST, 'All fields are required');
    }

    const user = await userModel.findOne({ username }).select('+password');
    if (!user) {
      throw createHttpError(UNAUTHORIZED, 'Invalid username or password');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw createHttpError(UNAUTHORIZED, 'Invalid username or password');
    }

    const accessToken = await signToken({ id: user._id });

    res.status(OK).json({ message: 'login successfully', token: accessToken });
  } catch (error) {
    next(error);
  }
};
