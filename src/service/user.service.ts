import { PrismaClient } from "@prisma/client";
import IUser from "../interfaces/user.interface";

const prisma = new PrismaClient();

async function createUserService({ name, email }: IUser) {
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
        }
    });
    return newUser;
}

async function readUserService() {
    const readUser = await prisma.user.findMany();
    return readUser;
}

export default { createUserService, readUserService };
