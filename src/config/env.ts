import 'dotenv/config';

export const PORT = process.env.PORT || 8000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const NODE_ENV = process.env.NODE_ENV || 'production';
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
export const JWT_SECRET = process.env.JWT_SECRET;
