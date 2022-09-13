import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productRouters = Router();

productRouters.post('/products', productsController.create);
productRouters.get('/products', productsController.getAll);

export default productRouters;