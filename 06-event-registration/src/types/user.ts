// 06-event-registration/src/types/user.ts
import type { Session, User } from '@supabase/supabase-js';
export interface UserInputsTypes {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}
