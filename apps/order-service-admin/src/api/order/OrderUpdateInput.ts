import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  totalAmount?: number | null;
  orderDate?: Date | null;
  user?: string | null;
  restaurant?: string | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
};
