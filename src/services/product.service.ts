import IProduct from '../interfaces/products.interfaces';
import isValid from '../middlewares/validations';
import productsModel from '../models/products.model';
import HttpException from '../shared/http.exception';

const productsService = {
  create: async (product: IProduct) => {
    if (!isValid(product)) {
      throw new HttpException(400, 'Dados Inválidos');
    }
    const newProduct = product;
    const { insertId } = await productsModel.create(product);
    newProduct.id = insertId;
    return newProduct;
  },
};
  
export default productsService;