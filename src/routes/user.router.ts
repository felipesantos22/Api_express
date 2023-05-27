import express from 'express';
import createUserController from '../controller/user.controller';

const routerUser = express.Router();

routerUser.post('/user', createUserController);

export default routerUser;