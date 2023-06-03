import express from 'express';
import postController from '../controller/post.controller';

const postRouter = express.Router();

postRouter.post('/post', postController.createPostController);
postRouter.get('/post',postController.readPostController);

export default postRouter;