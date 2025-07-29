// 03-product-variants/src/services/getProducts.service.ts

import { supabase } from '@/lib/supabaseClient';
import type { ProductType } from '@/types/product';

export const getProducts = async (): Promise<ProductType[]> => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data ?? [];
};
