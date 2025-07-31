// 06-event-registration/src/hooks/useUserEvents.tsx
'use client';
import { getUserEventRegister } from '@/services/getUserEventRegister';
import { useQuery } from '@tanstack/react-query';

export const useUserEvents = (userId: string | null) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['registrations'],
    queryFn: () => getUserEventRegister(userId),
    enabled: !!userId,
  });

  return { data, isPending, error };
};
