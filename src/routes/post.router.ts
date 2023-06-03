import express from 'express';
import postController from '../controller/post.controller';

const postRouter = express.Router();

postRouter.post('/post', postController.createPostController);
postRouter.get('/post', postController.readPostController);
postRouter.put('/post/:id', postController.updatePostController);
postRouter.delete('/post/:id', postController.deletePostController);

export default postRouter;