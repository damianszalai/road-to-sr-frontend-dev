// 07-performance-ssr-vs-csr/src/hooks/useSubscribeEvent.tsx
import { subscribeEvent } from '@/services/subscribeEvent';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type UpdateEventParams = {
  eventId: string;
  numberOfSpots: number;
  userId: string;
};

export const useSubscribeEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId, userId, numberOfSpots }: UpdateEventParams) =>
      subscribeEvent(eventId, userId, numberOfSpots),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['registrations'] });
      return true;
    },
  });
};
