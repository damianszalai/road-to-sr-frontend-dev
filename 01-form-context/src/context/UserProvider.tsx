import { useEffect, useState, type ReactNode } from 'react';
import type { UserData } from '../types/user';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }: { children: ReactNode }) => {
const [userData, setUserData] = useState<UserData | null>(() => {
  const stored = localStorage.getItem('user');
  return stored ? JSON.parse(stored) : null;
});

  useEffect(() => {
  if (userData) localStorage.setItem('user', JSON.stringify(userData));
}, [userData]);


  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
