import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  orderDate?: DateTimeNullableFilter;
  user?: StringNullableFilter;
  restaurant?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
};
