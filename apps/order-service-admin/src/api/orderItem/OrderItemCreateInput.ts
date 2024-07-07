import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  quantity?: number | null;
  price?: number | null;
  menuItem?: string | null;
  order?: OrderWhereUniqueInput | null;
};
