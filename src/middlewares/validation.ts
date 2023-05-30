import { NextFunction, Request, Response } from "express";

const validateName = (request: Request, response: Response, next: NextFunction) => {
    const { email, name } = request.body;
    if (!name) {
        return response.status(400).json({ message: '"name" is required' });
    }
    if (name.length < 5) {
        return response.status(422)
            .json({ message: '"name" length must be at least 5 characters long' });
    }
    if (!email) {
        return response.status(422)
            .json({ message: '"email" is required' });
    }
    next();
};

export default validateName;