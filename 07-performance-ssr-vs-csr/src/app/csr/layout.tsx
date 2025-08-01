// 07-performance-ssr-vs-csr/src/app/csr/layout.tsx
'use client';
import ProtectedRoute from '@/components/ProtectedRoute';

const CsrLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <main>{children}</main>
    </ProtectedRoute>
  );
};

export default CsrLayout;
