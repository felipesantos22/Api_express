import { Request, Response } from "express";
import userController from "../service/user.service";

async function createUserController(req: Request, res: Response) {
    const { name, email } = req.body;
    const newUser = await userController.createUserService({ name, email });
    return res.status(200).json(newUser);
}

async function readUserontroller(_req: Request, res: Response) {
    const readUser = await userController.readUserService();
    return res.status(200).json(readUser);
}

export default { createUserController, readUserontroller };

