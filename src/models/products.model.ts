import { ResultSetHeader } from 'mysql2';
import { IProduct, Product } from '../interfaces/products.interfaces';
import connection from './connection';

const productsModel = {
  create: async (product: IProduct):Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?,?)`, [product.name, product.amount]);

    return result;
  },
  getAll: async ():Promise<Product[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [products] = await connection.execute(query);
  
    return products as Product[];
  },
};

export default productsModel;