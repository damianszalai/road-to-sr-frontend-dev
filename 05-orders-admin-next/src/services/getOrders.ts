// 05-orders-admin-next/src/services/getOrders.ts

import { supabase } from '@/lib/supabaseClient';
import type { OrdersType } from '@/types/orders';

export const getOrders = async (): Promise<OrdersType[]> => {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data ?? [];
};
