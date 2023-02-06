import express from 'express';
import { AppDataSource } from './data_source';
import userRouter from './controllers/routes/userRouter';
import postRouter from './controllers/routes/postsRouter';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(userRouter);
  app.use(postRouter);

  return app.listen(process.env.PORT);
});
