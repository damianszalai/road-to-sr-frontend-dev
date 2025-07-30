// 05-orders-admin-next/src/types/orders.ts

export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'cancelled';
export interface Order {
  id: string;
  customer_name: string;
  total: number;
  status: OrderStatus;
  created_at: string;
}
