import { NextFunction, Request, Response } from "express";
// import Joi from "joi";

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

// const validateNewUser = (req: Request, res: Response, next: NextFunction) => {
//     const { error } = Joi.object({
//         name: Joi.string().min(8).required().messages({
//             'string.max': '"displayName" length must be at least 8 characters long',
//         }),
//         email: Joi.string().email().required().messages({
//             'string.email': '"email" must be a valid email',
//         }),
//     }).validate(req.body);

//     if (error) return res.status(400).json({ message: error.message });

//     next();
// };

export default { validateName };