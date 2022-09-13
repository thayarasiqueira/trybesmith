import { Router } from 'express';
import productsController from '../controllers/product.controller';

const productRouters = Router();

productRouters.post('/products', productsController.create);

export default productRouters;