// 07-performance-ssr-vs-csr/src/services/getUserEventRegister.ts
import { supabase } from '@/lib/supabaseClient';

export const getUserEventRegister = async (
  userId: string | null,
): Promise<string[]> => {
  const { data, error } = await supabase
    .from('registrations')
    .select('event_id')
    .eq('user_id', userId);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  if (data) {
    return data.map((item) => item.event_id);
  }

  return [];
};
