import { Request, Response } from "express";
import userController from "../service/user.service";

async function createUserController(req: Request, res: Response) {
    const { email, name } = req.body;
    const newUser = await userController.createUserService({ email, name });
    return res.status(200).json(newUser);
}

async function readUserController(_req: Request, res: Response) {
    const readUser = await userController.readUserService();
    return res.status(200).json(readUser);
}

async function updateUserController(req: Request, res: Response) {
    const { id } = req.params;
    const { email, name } = req.body;
    await userController.updateUserService(Number(id), email, name);
    return res.status(200).json({message:"Update successful!"});
}

async function deleteUserController(req: Request, res: Response) {
    const { id } = req.params;
    await userController.deleteUserService(Number(id));
    return res.status(200).json({ message: "User deleted!" });
}

export default { createUserController, readUserController, updateUserController, deleteUserController };

