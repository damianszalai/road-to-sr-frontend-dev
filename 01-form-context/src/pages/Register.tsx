import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useUser } from '../hooks/useUser';
import { Link, useNavigate } from 'react-router-dom';

const userFormSchema = z.object({
  username: z.string().min(3),
  email: z.email(),
  age: z.number().min(16).max(120),
  city: z.string(),
});

type UserForm = z.infer<typeof userFormSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  const navigate = useNavigate();
  const { setUserData } = useUser();

  const onSubmit = (data: UserForm) => {
    if (data) {
      setUserData(data);
      navigate('/profile');
    }
  };

  return (
    <div>
      <h1>Formulario de registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nombre completo:</label>
          <input type="text" id="username" {...register('username')} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="age">Eded</label>
          <input
            type="number"
            id="age"
            {...register('age', { valueAsNumber: true })}
            min={1}
            required
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label htmlFor="city">city</label>
          <input type="text" id="city" {...register('city')} />
          {errors.city && <p>{errors.city.message}</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/profile">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;
