import { Request, Response } from 'express';
import usersService from '../services/users.services';

const usersController = {
  create: async (req:Request, res:Response): Promise<Response> => {
    const token = await usersService.create(req.body);
    return res.status(201).json({ token });
  },
};
  
export default usersController;