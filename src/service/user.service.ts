import { PrismaClient } from "@prisma/client";
import IUser from "../interfaces/user.interface";

const prisma = new PrismaClient();

async function createUserService({ email, name }: IUser) {
    const newUser = await prisma.user.create({
        data: {
            email,
            name,
        }
    });
    return newUser;
}

async function readUserService() {
    const readUser = await prisma.user.findMany();
    return readUser;
}

async function deleteUserService(id: number) {
    const deleteUser = await prisma.user.delete({
        where: {
            id,
        }
    });
    return deleteUser;
}

export default { createUserService, readUserService , deleteUserService };
