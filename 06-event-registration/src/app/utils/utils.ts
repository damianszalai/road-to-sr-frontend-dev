// 06-event-registration/src/app/utils/utils.ts
export const dateFormatted = (date: string) => {
  const newDate = new Date(date).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return newDate;
};
