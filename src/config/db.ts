import mongoose from 'mongoose';
import { MONGODB_URI } from './env';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Connected to DB'));
    mongoose.connection.on('error', (error) =>
      console.log('Error connecting to DB', error)
    );

    await mongoose.connect(MONGODB_URI as string);
  } catch (error) {
    console.error('Failed to connect to DB', error);
    process.exit(1);
  }
};

export default connectDB;
