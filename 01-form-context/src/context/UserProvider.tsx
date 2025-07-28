import { useState, type ReactNode } from 'react';
import type { UserData } from '../types/User';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
