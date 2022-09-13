import ordersModel from '../models/orders.model';
import { IOrder } from '../interfaces/orders.interface';

const ordersService = {
  getAll: async ():Promise<IOrder[]> => {
    const orders = await ordersModel.getAll();
    return orders as IOrder[];
  },
};
  
export default ordersService;