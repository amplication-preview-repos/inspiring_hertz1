import { Order } from "../order/Order";

export type OrderItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  price: number | null;
  menuItem: string | null;
  order?: Order | null;
};
