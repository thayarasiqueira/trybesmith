import jwt, { SignOptions } from 'jsonwebtoken';

const generateToken = (username: string) => {
  const secret = process.env.JWT_SECRET || 'default_password';

  const JWT_CONFIG: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ username }, secret, JWT_CONFIG);

  return token;
};

export default generateToken;