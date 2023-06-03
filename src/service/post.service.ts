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

export default { createPostService, readPostService };