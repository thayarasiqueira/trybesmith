import { Request, Response } from 'express';
import usersService from '../services/users.services';

const usersController = {
  create: async (req:Request, res:Response): Promise<Response> => {
    const token = await usersService.create(req.body);
    return res.status(201).json({ token });
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