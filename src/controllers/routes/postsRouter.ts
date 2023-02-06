import { Router } from 'express';
import { PostController } from '../PostController';

const postRouter = Router();

const postController = new PostController();

postRouter.post('/posts/:userId', postController.create);

export default postRouter;
