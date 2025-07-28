import z from "zod";

export const userFormSchema = z.object({
  username: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.email('El email no es válido'),
  age: z.number('La edad debe ser un número').min(16, 'Debes tener al menos 16 años'),
  city: z.string().min(2, 'La ciudad es obligatoria'),
});

export type UserForm = z.infer<typeof userFormSchema>;