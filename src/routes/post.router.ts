import express from 'express';
import postController from '../controller/post.controller';

const postRouter = express.Router();

postRouter.post('/post', postController.createPostController);
postRouter.get('/post', postController.readPostController);
postRouter.put('/post', postController.updatePostController);
postRouter.delete('/post', postController.deletePostController);

export default postRouter;