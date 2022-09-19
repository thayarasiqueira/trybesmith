import { IProduct } from '../interfaces/products.interfaces';
import ILogin from '../interfaces/login.interfaces';
import { IUser } from '../interfaces/users.interfaces';

const isValidUsername = (username: string) => {
  switch (true) {
    case !username:
      return { code: 400, message: '"username" is required' };
    case typeof username !== 'string':
      return { code: 422,
        message: '"username" must be a string' };
    case username.length < 3:
      return { code: 422,
        message: '"username" length must be at least 3 characters long' };
    default:
      return { code: 201 };
  }
};

const isValidClasse = (classe: string) => {
  switch (true) {
    case !classe:
      return { code: 400,
        message: '"classe" is required' };
    case typeof classe !== 'string':
      return { code: 422,
        message: '"classe" must be a string' };
    case classe.length < 3:
      return { code: 422,
        message: '"classe" length must be at least 3 characters long' };
    default:
      return { code: 201 };
  }
};

const isValidLevel = (level: number) => {
  switch (true) {
    case level < 1:
      return { code: 422,
        message: '"level" must be greater than or equal to 1' };
    case !level:
      return { code: 400,
        message: '"level" is required' };
    case typeof level !== 'number':
      return { code: 422,
        message: '"level" must be a number' };
    default:
      return { code: 201 };
  }
};

const isValidPassword = (password: string) => {
  switch (true) {
    case !password:
      return { code: 400,
        message: '"password" is required' };
    case typeof password !== 'string':
      return { code: 422,
        message: '"password" must be a string' };
    case password.length < 8:
      return { code: 422,
        message: '"password" length must be at least 8 characters long' };
    default:
      return { code: 201 };
  }
};

export const isValidUser = (user: IUser) => {
  const { username, classe, level, password } = user;

  const validUsername = isValidUsername(username);

  if (validUsername.message) {
    return { code: validUsername.code, message: validUsername.message };
  }

  const validClasse = isValidClasse(classe);

  if (validClasse.message) {
    return { code: validClasse.code, message: validClasse.message };
  }

  const validPassword = isValidPassword(password);

  if (validPassword.message) {
    return { code: validPassword.code, message: validPassword.message };
  }

  const validLevel = isValidLevel(level);

  if (validLevel.message) {
    return { code: validLevel.code, message: validLevel.message };
  }

  return { code: validLevel.code };
};

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
