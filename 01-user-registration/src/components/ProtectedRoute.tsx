// 01-form-context/src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import type { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { userData } = useUser();

  return userData ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
