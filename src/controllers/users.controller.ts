import { Request, Response } from 'express';
import usersService from '../services/users.services';

const usersController = {
  create: async (req:Request, res:Response) => {
    const user = req.body;
    const { code, message, token } = await usersService.create(user);
    if (message) {
      res.status(code).json({ message });
    }
    res.status(code).json({ token });
  },
  login: async (req:Request, res:Response) => {
    const user = req.body;
    const { code, message, token } = await usersService.login(user);
    if (message) {
      res.status(code).json({ message });
    }
    res.status(code).json({ token });
  },
};
  
export default usersController;