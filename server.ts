import app from './src/app';
import connectDB from './src/config/db';
import { PORT } from './src/config/env';

const startServer = async () => {
  await connectDB();

  const port = PORT;
  app.listen(port, () => console.log(`Server listening on port: ${port}`));
};

startServer();
