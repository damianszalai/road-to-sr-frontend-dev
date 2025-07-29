// 04-auth-dashboard/src/components/ProtectedRoute.tsx
// 01-form-context/src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
