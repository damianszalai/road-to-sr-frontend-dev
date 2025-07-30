// 05-orders-admin-next/src/hooks/useOrders.tsx
import { getOrders } from '@/services/getOrders';
import { useQuery } from '@tanstack/react-query';

export const useOrders = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['orders'],
    queryFn: () => getOrders(),
  });

  return { data, isPending, error };
};
