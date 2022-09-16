import { IProduct, Product } from '../interfaces/products.interfaces';
import { isValidProduct } from '../middlewares/validations';
import productsModel from '../models/products.model';

const productsService = {
  create: async (product: IProduct) => {
    const resultError = isValidProduct(product);
    if (resultError.message) {
      return resultError;
    }
    const newProduct = product;
    const { insertId } = await productsModel.create(product);
    newProduct.id = insertId;
    const result = { code: 201, message: newProduct };
    return result;
  },
  getAll: async ():Promise<Product[]> => {
    const products = await productsModel.getAll();
    return products as Product[];
  },
};
  
export default productsService;