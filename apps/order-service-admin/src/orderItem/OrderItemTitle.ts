import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "menuItem";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.menuItem?.toString() || String(record.id);
};
