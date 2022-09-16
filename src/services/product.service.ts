import { IProduct, Product } from '../interfaces/products.interfaces';
import productsModel from '../models/products.model';

const productsService = {
  create: async (product: IProduct) => {
    const newProduct = product;
    const { insertId } = await productsModel.create(product);
    newProduct.id = insertId;
    return newProduct;
  },
  getAll: async ():Promise<Product[]> => {
    const products = await productsModel.getAll();
    return products as Product[];
  },
};
  
export default productsService;