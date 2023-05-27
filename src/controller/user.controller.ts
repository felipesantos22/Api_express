import { Request, Response } from "express";
import createUser from "../service/user.service";

async function createUserController(req: Request, res: Response) {
    const { name, email } = req.body;
    const newUser = await createUser({name, email});
    return res.status(200).json(newUser);
}

export default createUserController;