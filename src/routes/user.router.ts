import express from 'express';
import userController from '../controller/user.controller';
import validation from '../middlewares/validation';



const routerUser = express.Router();

routerUser.post('/user', validation.validateName, userController.createUserController);
routerUser.get('/user', userController.readUserController);
routerUser.delete('/user/:id', userController.deleteUserController);
routerUser.put('/user/:id', (_req, res) => {
    res.send("Projeto pleno back-end!")
});

export default routerUser;