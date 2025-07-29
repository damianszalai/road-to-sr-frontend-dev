// 04-auth-dashboard/src/components/RegisterForm.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userFormSchema, type UserForm } from '../schemas/user';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  const navigate = useNavigate();
  const { signUp, loading } = useAuth();

  const onSubmit = async (data: UserForm) => {
    const { email, password } = data;
    try {
      await signUp(email, password);
      navigate('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Signup failed:', err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">
        Crear una cuenta
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tucorreo@ejemplo.com"
            {...register('email')}
            className="mt-1 w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            {...register('password')}
            className="mt-1 w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading && <Loader2 className="animate-spin h-4 w-4" />}
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
