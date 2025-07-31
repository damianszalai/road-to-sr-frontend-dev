// 06-event-registration/src/app/dashboard/page.tsx
'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useEvents } from '@/hooks/useEvents';
import { dateFormatted } from '../utils/utils';
import { useSubscribeEvent } from '@/hooks/useSubscribeEvent';
import { useUserEvents } from '@/hooks/useUserEvents';

const Page = () => {
  const { user } = useAuth();

  const { data: dataEvents, isPending, error } = useEvents();

  const { data: userEvents } = useUserEvents(user?.id || null);

  const subscribe = useSubscribeEvent();

  const { mutate: updateEvent } = subscribe;

  const handleRegister = async (
    eventId: string,
    userId: string,
    numberOfSpots: number,
  ) => {
    updateEvent({
      eventId,
      userId,
      numberOfSpots,
    });
  };

  return (
    <div>
      <h1>Hello {user && user.email}</h1>
      {isPending && <p>Cargando...</p>}
      {!isPending && dataEvents && dataEvents.length === 0 && (
        <p>No hay eventos disponible</p>
      )}
      {!isPending && dataEvents && dataEvents.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {dataEvents.map((event) => {
            const isRegistered = userEvents?.includes(event.id);
            const availableToRegister = event.spots > 0 && !isRegistered;
            const buttonText = isRegistered
              ? 'registrado'
              : event.spots === 0
              ? 'Evento lleno'
              : 'registrarme';

            return (
              <Card
                className="hover:shadow-md transition-shadow"
                key={event.id}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                    <Badge variant="outline">{event.spots} lugares</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dateFormatted(event.date)}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    variant={isRegistered ? 'secondary' : 'default'}
                    className="w-full"
                    disabled={!availableToRegister}
                    onClick={() => {
                      if (!user?.id) {
                        return;
                      }
                      handleRegister(event.id, user.id, event.spots - 1);
                    }}
                  >
                    {buttonText}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
      {error && <p>ups, hubo un error!</p>}
    </div>
  );
};

export default Page;
