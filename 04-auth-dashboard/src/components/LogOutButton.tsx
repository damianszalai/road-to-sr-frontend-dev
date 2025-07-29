// 04-auth-dashboard/src/components/LogOutButton.tsx

import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut();
    navigate('/login');
  };
  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default LogOutButton;
