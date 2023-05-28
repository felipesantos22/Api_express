import express from 'express';
import userController from '../controller/user.controller';

const routerUser = express.Router();

routerUser.post('/user', userController.createUserController);
routerUser.get('/user', userController.readUserontroller);

export default routerUser;