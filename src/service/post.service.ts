import { Post, PrismaClient } from "@prisma/client";
import IPost from "../interfaces/post.interface";


const prisma = new PrismaClient();

async function createPostService({ title, content, published, authorId }: IPost) {
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            published,
            authorId,
        }
    });
    return newPost;
}

async function readPostService(): Promise<Post[]> {
    const readPost = await prisma.post.findMany();
    console.log(readPost);
    return readPost;
}

async function updatePostService(id: number, title: string, content: string, published: boolean, authorId: number) {
    const updatePost = await prisma.post.update({
        where: {
            id,
        },
        data: {
            title,
            content,
            published,
            authorId,
        }
    });
    return updatePost;
}

async function deletePostService(id: number) {
    const deletePost = await prisma.user.delete({
        where: {
            id,
        }
    });
    return deletePost;
}


export default { createPostService, readPostService, updatePostService, deletePostService, };