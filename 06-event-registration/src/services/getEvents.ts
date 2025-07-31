// 06-event-registration/src/services/getEvents.ts

import { supabase } from '@/lib/supabaseClient';
import { Event } from '@/types/events';

export const getEvents = async (): Promise<Event[]> => {
  const { data, error } = await supabase.from('events').select('*');

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data ?? [];
};
