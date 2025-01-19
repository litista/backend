import winston from 'winston';
import { LOG_LEVEL } from '../config/env';

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default logger;
