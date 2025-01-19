import mongoose from 'mongoose';

import { MONGODB_URI } from './env';
import logger from '../utils/logger';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => logger.info('Connected to DB'));
    mongoose.connection.on('error', (error) =>
      logger.error('Error connecting to DB', error)
    );

    await mongoose.connect(MONGODB_URI as string);
  } catch (error) {
    logger.error('Failed to connect to DB', error);
    process.exit(1);
  }
};

export default connectDB;
