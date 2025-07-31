// 06-event-registration/src/services/addNewRegistration.ts
import { supabase } from '@/lib/supabaseClient';
import { Registrations } from '@/types/registrations';

export const addNewRegister = async (
  eventId: string,
  user_id: string,
): Promise<Registrations[]> => {
  const { data, error } = await supabase
    .from('registrations')
    .insert({ event_id: eventId, user_id: user_id });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data ?? [];
};
