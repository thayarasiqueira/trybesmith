import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/products.interfaces';
import connection from './connection';

const productsModel = {
  create: async (product: IProduct):Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?,?)`, [product.name, product.amount]);

    return result;
  },
};

export default productsModel;