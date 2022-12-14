import express from 'express';
import 'express-async-errors';
import httpErrors from './middlewares/http.errors';
import productRouters from './routers/products.router';
import usersRouters from './routers/users.router';
import ordersRouters from './routers/orders.router';
import usersController from './controllers/users.controller';

const app = express();

app.use(express.json());

app.use(httpErrors);
app.use(productRouters);
app.use(usersRouters);
app.use(ordersRouters);
app.post('/login', usersController.login);

export default app;