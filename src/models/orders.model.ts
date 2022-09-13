import { IOrder } from '../interfaces/orders.interface';
import connection from './connection';

const ordersModel = {
  getAll: async ():Promise<IOrder[]> => {
    const query = `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id
    ORDER BY o.userId;
  `;
    const [orders] = await connection.execute(query);
  
    return orders as IOrder[];
  },
};

export default ordersModel;