// 07-performance-ssr-vs-csr/src/app/csr/page.tsx
'use client';
import EventsList from '@/components/EventsList';
import { useAuth } from '@/hooks/useAuth';

const Page = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Hi from client side {user && user.email}</h1>
      <EventsList />
    </div>
  );
};

export default Page;
