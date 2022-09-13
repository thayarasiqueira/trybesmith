export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface Product extends IProduct {
  orderId: number;
}
