// 04-auth-dashboard/src/components/LoginForm.tsx

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userFormSchema, type UserForm } from '../schemas/user';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [authError, setAuthError] = useState<string>('');
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  const onSubmit = async (data: UserForm) => {
    const { email, password } = data;

    try {
      setAuthError('');
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAuthError('Credenciales inválidas. Intenta de nuevo.');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl px-10 py-8 w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-zinc-800 dark:text-white">
        Iniciar Sesión
      </h2>

      {authError && (
        <p className="text-red-500 text-sm text-center mb-4">{authError}</p>
      )}

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`text-white mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email
              ? 'border-red-500'
              : 'border-zinc-300 dark:border-zinc-600'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          {...register('password')}
          className={`text-white mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.password
              ? 'border-red-500'
              : 'border-zinc-300 dark:border-zinc-600'
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full py-2 px-4 rounded-md text-white font-semibold transition ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};

export default LoginForm;
