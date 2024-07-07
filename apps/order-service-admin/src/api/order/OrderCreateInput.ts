import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  totalAmount?: number | null;
  orderDate?: Date | null;
  user?: string | null;
  restaurant?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
};
