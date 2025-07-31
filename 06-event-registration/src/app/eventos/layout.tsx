// 06-event-registration/src/app/dashboard/layout.tsx
'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import LogOutButton from '@/components/ui/LogOutButton';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="container mx-auto">
        <h1>Layout</h1>
        <LogOutButton />

        <main>{children}</main>
      </div>
    </ProtectedRoute>
  );
}
