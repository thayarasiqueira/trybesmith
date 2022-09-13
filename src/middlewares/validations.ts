import { IProduct } from '../interfaces/products.interfaces';

const isValid = (product: IProduct) => {
  if (product !== undefined) return true;
};

export default isValid;