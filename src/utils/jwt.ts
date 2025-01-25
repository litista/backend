import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';

export const signToken = async (payload: {}) => {
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn: '1d' });
};

export const verifyToken = async (token: string) => {
  return jwt.verify(token, JWT_SECRET as string);
};
