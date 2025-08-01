// 07-performance-ssr-vs-csr/src/components/ProtectedRoute.tsx
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import type { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  if (!user && !loading) {
    router.push('/login');
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
