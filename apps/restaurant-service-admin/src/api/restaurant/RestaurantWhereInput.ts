import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RestaurantWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  phone?: StringNullableFilter;
  website?: StringNullableFilter;
};
