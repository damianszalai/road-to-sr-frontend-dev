// 07-performance-ssr-vs-csr/src/hooks/useAuth.tsx
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
