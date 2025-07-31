// 06-event-registration/src/hooks/useEvents.tsx
'use client';
import { getEvents } from '@/services/getEvents';
import { useQuery } from '@tanstack/react-query';

export const useEvents = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(),
  });

  return { data, isPending, error };
};
