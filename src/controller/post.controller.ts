import { Request, Response } from "express"
import postController from '../service/post.service'

async function createPostController(req: Request, res: Response) {
    const { title, content, published, authorId } = req.body;
    const newPost = await postController.createPostService({ title, content, published, authorId });
    return res.status(200).json(newPost);
}

async function readPostController(_req: Request, res: Response) {
    const readPost = await postController.readPostService();
    return res.status(200).json(readPost);
}

export default { createPostController, readPostController };