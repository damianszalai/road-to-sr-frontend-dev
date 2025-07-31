// 06-event-registration/src/services/subscribeEvent.ts
import { supabase } from '@/lib/supabaseClient';

export const subscribeEvent = async (
  event_id: string,
  user_id: string,
  numberOfSpots: number,
): Promise<string | []> => {
  const { error: eventError } = await supabase
    .from('events')
    .update({ spots: numberOfSpots })
    .eq('id', event_id);

  if (eventError) {
    console.error(eventError);
    throw new Error(eventError.message);
  }

  const { error } = await supabase
    .from('registrations')
    .insert({ event_id: event_id, user_id: user_id });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return 'success';
};
