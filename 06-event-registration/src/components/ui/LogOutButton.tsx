// 06-event-registration/src/components/ui/LogOutButton.tsx
'use client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from './button';
/* import { useRouter } from 'next/navigation'; */

const LogOutButton = () => {
  const { signOut } = useAuth();
  /*   const router = useRouter(); */
  const handleSignOut = () => {
    signOut();
    /*     router.push('/login'); */
  };
  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default LogOutButton;
