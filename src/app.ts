import express from 'express';
import 'express-async-errors';
import httpErrors from './middlewares/http.errors';
import productRouters from './routers/products.router';

const app = express();

app.use(express.json());

app.use(productRouters);
app.use(httpErrors);

export default app;