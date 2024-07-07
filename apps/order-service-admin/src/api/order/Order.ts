import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  orderDate: Date | null;
  user: string | null;
  restaurant: string | null;
  orderItems?: Array<OrderItem>;
};
