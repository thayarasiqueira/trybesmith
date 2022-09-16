import { Request, Response } from 'express';
import { isValidProduct } from '../middlewares/validations';
import productsService from '../services/product.service';

const productsController = {
  create: async (req:Request, res:Response) => {
    const { code, message } = isValidProduct(req.body);
    if (message) {
      return res.status(code).json({ message });
    }
    const product = await productsService.create(req.body);
    return res.status(201).json(product);
  },
  getAll: async (req:Request, res:Response): Promise<Response> => {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  },
};
  
export default productsController;