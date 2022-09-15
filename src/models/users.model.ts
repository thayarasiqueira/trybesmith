import { ResultSetHeader } from 'mysql2';
import ILogin from '../interfaces/login.interfaces';
import { IUser } from '../interfaces/users.interfaces';
import connection from './connection';

const usersModel = {
  create: async (user: IUser) => {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await connection.query<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    ); 

    return { id: insertId, ...user };
  },
  login: async (login: ILogin):Promise<ILogin[]> => {
    const { username, password } = login;
    const query = `SELECT username, password
    FROM Trybesmith.Users WHERE username = ? AND password = ?`;
    const [result] = await connection.execute(query, [username, password]);
    return result as ILogin[];
  },
};

export default usersModel;