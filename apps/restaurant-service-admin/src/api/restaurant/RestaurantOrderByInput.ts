import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  phone?: SortOrder;
  website?: SortOrder;
};
