// 03-product-variants/src/services/getProductsWithVariants.service.ts

import { supabase } from '@/lib/supabaseClient';
import type { ProductWithVariantType } from '@/types/product';

export const getProductsWithVariants = async (): Promise<
  ProductWithVariantType[]
> => {
  const { data, error } = await supabase
    .from('products')
    .select('*, variants(*)');

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data ?? [];
};
