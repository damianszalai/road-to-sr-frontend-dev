import { createContext } from 'react';
import type { UserContextType } from '../types/User';

export const UserContext = createContext<UserContextType | null>(null);
