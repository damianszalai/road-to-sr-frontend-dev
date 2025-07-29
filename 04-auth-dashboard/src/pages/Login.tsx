// 04-auth-dashboard/src/pages/Login.tsx

import LoginForm from '@/components/LoginForm';
import LogOutButton from '@/components/LogOutButton';

export const Login = () => {
  return (
    <div>
      <LogOutButton />
      <LoginForm />
    </div>
  );
};
