import express from 'express';
import morgan from 'morgan';

import errorHandler from './middlewares/errorHandler';
import userRoutes from './routes/user.routes';

const app = express();
const api_version = '/api/v1';

// middlewares
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Litista' });
});

// routes
app.use(`${api_version}/users`, userRoutes);

app.use(errorHandler);

export default app;
