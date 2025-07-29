// 03-product-variants/src/hooks/useProductsWithVariants.tsx

import { getProductsWithVariants } from '@/services/getProductsWithVariants.service';
import { useQuery } from '@tanstack/react-query';

export const useProductsWithVariants = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['products-variants'],
    queryFn: () => getProductsWithVariants(),
  });

  return { data, isPending, error };
};
