import { IUser } from '../interfaces/users.interfaces';
import { isValidLogin, isValidUser } from '../middlewares/validations';
import usersModel from '../models/users.model';
import generateToken from '../utils/generateToken';
import ILogin from '../interfaces/login.interfaces';
import Service from '../interfaces/serice.interfaces';

const usersService = {
  create: async (user: IUser) => {
    const { code, message } = isValidUser(user);
    if (message) {
      return { code, message };
    }
    const { username } = await usersModel.create(user);
    const token = generateToken(username);
    return { code, token };
  },
  login: async (user: ILogin):Promise<Service> => {
    const { code, message } = isValidLogin(user);
    if (message) {
      return { code, message };
    }
    const result = await usersModel.login(user);
    if (!result.length) {
      return { code: 401, message: 'Username or password invalid' };
    }
    const token = generateToken(user.username);
    return { code, token };
  },
};
  
export default usersService;