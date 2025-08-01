// 07-performance-ssr-vs-csr/src/app/ssr/page.tsx
import { getQueryClient } from '@/lib/queryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getEvents } from '@/services/getEvents';
import EventsList from '@/components/EventsList';

export default async function SSRPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1>Hi from server side</h1>
      <EventsList />
    </HydrationBoundary>
  );
}
