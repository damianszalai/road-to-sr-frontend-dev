import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import type { UserContextType } from '../types/User';

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser debe usarse dentro de <UserProvider>');
  return context;
};
