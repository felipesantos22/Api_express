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

async function updatePostController(req: Request, res: Response) {
    const { id } = req.params;
    const { title, content, published, authorId } = req.body;
    try {
        await postController.updatePostService(Number(id), title, content, published, authorId);
        return res.status(200).json({ message: "Update successful!" });
    } catch (error) {
        return res.status(400).json({ message: "Not successful!" });
    }

}

async function deletePostController(req: Request, res: Response) {
    const { id } = req.params;
    await postController.deletePostService(Number(id));
    return res.status(200).json({ message: "Post deleted!" });
}

export default { createPostController, readPostController, updatePostController, deletePostController };