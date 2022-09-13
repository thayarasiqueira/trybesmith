import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRouters = Router();

usersRouters.post('/users', usersController.create);

export default usersRouters;