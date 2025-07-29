// 04-auth-dashboard/src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Environment variable VITE_SUPABASE_URL is not defined.');
}

if (!supabaseAnonKey) {
  throw new Error(
    'Environment variable VITE_SUPABASE_ANON_KEY is not defined.',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
