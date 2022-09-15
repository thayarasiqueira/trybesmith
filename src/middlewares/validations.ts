import { IProduct } from '../interfaces/products.interfaces';
import ILogin from '../interfaces/login.interfaces';

export const isValid = (product: IProduct) => {
  if (product !== undefined) return true;
};

export const isValidLogin = (user: ILogin) => {
  const { username, password } = user;

  switch (true) {
    case !username:
      return { code: 400, message: '"username" is required' };
    case !password:
      return { code: 400, message: '"password" is required' };
    default:
      return { code: 200 };
  }
};
