// 05-orders-admin-next/src/services/updateOrderStatus.ts

import { supabase } from '@/lib/supabaseClient';
import type { OrderStatus } from '@/types/orders';

export const updateOrderStatus = async (id: string, status: OrderStatus) => {
  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id);

  if (error) throw error;
};
