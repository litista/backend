import express from 'express';
import morgan from 'morgan';

import errorHandler from './middlewares/errorHandler';

const app = express();

// middlewares
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Litista' });
});

app.use(errorHandler);

export default app;
