// 03-product-variants/src/hooks/useProducts.tsx
import { getProducts } from '@/services/getProducts.service';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  return { data, isPending, error };
};
