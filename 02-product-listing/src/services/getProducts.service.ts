// 02-product-listing/src/services/getProducts.service.ts

import { supabase } from '@/lib/supabaseClient';
import type { ProductType } from '@/types/product';

export const getProducts = async (): Promise<ProductType[] | null> => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data ?? [];
};
