import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
};
