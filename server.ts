import app from './src/app';
import connectDB from './src/config/db';
import { PORT } from './src/config/env';
import logger from './src/utils/logger';

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => logger.info(`Server running on port: ${PORT}`));
};

startServer();
