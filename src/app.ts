import express from 'express';

import errorHandler from './middlewares/errorHandler';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Litista' });
});

app.use(errorHandler);

export default app;
