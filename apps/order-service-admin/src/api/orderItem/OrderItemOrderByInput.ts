import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  price?: SortOrder;
  menuItem?: SortOrder;
  orderId?: SortOrder;
};
