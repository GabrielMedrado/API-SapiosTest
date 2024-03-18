import 'reflect-metadata';
import 'dotenv/config';
import '../shared/container';
import 'express-async-errors';

import express, { NextFunction } from 'express';
import swaggerDocs from '../doc/swagger.json';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import { run } from './config/database/mongo.connection';
import { router } from './routes';
import { Request, Response } from 'express';
import { AppError } from '../errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);
app.use(run);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: { message: err.message },
    });
  }
  console.log(err);
  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

export { app };
