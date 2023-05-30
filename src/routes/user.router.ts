import express from 'express';
import userController from '../controller/user.controller';
import validateName from '../middlewares/validation';


const routerUser = express.Router();

routerUser.post('/user', validateName, userController.createUserController);
routerUser.get('/user', userController.readUserontroller);
routerUser.delete('/user/:id', userController.deleteUserController)

export default routerUser;