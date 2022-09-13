import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouters = Router();

ordersRouters.get('/orders', ordersController.getAll);

export default ordersRouters;