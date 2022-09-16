import { IProduct } from '../interfaces/products.interfaces';
import ILogin from '../interfaces/login.interfaces';

export const isValidProductName = (name:string) => {
  switch (true) {
    case !name:
      return { code: 400, message: '"name" is required' };
    case typeof name !== 'string':
      return { code: 422, message: '"name" must be a string' };
    case name.length < 3:
      return { code: 422, message: '"name" length must be at least 3 characters long' };
    default:
      return { code: 201 };
  }
};

export const isValidProductAmount = (amount: string) => {
  switch (true) {
    case !amount:
      return { code: 400, message: '"amount" is required' };
    case typeof amount !== 'string':
      return { code: 422, message: '"amount" must be a string' };
    case amount.length < 3:
      return { code: 422, message: '"amount" length must be at least 3 characters long' };
    default:
      return { code: 201 };
  }
};

export const isValidProduct = (product: IProduct) => {
  const { name, amount } = product;
  const validName = isValidProductName(name);
  if (validName.message) {
    return { code: validName.code, message: validName.message };
  }

  const validAmount = isValidProductAmount(amount);
  if (validAmount.message) {
    return { code: validAmount.code, message: validAmount.message };
  }

  return { code: validAmount.code };
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
