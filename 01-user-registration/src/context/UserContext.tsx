import { createContext } from 'react';
import type { UserContextType } from '../types/user';

const initialValue = null

export const UserContext = createContext<UserContextType | null>(initialValue);
