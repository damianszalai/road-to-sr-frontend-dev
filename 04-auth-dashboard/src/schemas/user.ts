// 04-auth-dashboard/src/schemas/user.ts
import z from 'zod';

export const userFormSchema = z.object({
  password: z.string().min(6, 'The password must have at least 6 characteres'),
  email: z.email('The email is not valid'),
});

export type UserForm = z.infer<typeof userFormSchema>;
