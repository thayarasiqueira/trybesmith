import express from 'express';
import 'express-async-errors';
import httpErrors from './middlewares/http.errors';
import productRouters from './routers/products.router';
import usersRouters from './routers/users.router';

const app = express();

app.use(express.json());

app.use(httpErrors);
app.use(productRouters);
app.use(usersRouters);

export default app;