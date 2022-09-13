import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/users.interfaces';
import connection from './connection';

const usersModel = {
  create: async (user: IUser) => {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    ); 

    return { id: insertId, ...user };
  },
};

export default usersModel;