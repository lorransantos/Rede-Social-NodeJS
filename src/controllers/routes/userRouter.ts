import { Router } from 'express';
import { PostController } from '../PostController';
import { UserController } from '../UserController';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/user', userController.create);
userRouter.get('/user/:userId', userController.userPosts);

export default userRouter;
