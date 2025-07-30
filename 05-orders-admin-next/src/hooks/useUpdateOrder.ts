// 05-orders-admin-next/src/hooks/useUpdateOrder.ts
import { updateOrderStatus } from '@/services/updateOrderStatus';
import { OrderStatus } from '@/types/orders';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type UpdateOrderParams = {
  id: string;
  status: OrderStatus;
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: UpdateOrderParams) =>
      updateOrderStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};
