import { Request, Response } from 'express';
import productsService from '../services/product.service';

const productsController = {
  create: async (req:Request, res:Response) => {
    const { code, message } = await productsService.create(req.body);
    if (typeof message === 'string') return res.status(code).json({ message });
    return res.status(code).json(message);
  },
  getAll: async (req:Request, res:Response): Promise<Response> => {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  },
};
  
export default productsController;