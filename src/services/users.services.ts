import { IUser } from '../interfaces/users.interfaces';
import usersModel from '../models/users.model';
import generateToken from '../utils/generateToken';

const usersService = {
  create: async (user: IUser) => {
    const { id, username } = await usersModel.create(user);
    const token = generateToken(id, username);
    return token;
  },
};
  
export default usersService;