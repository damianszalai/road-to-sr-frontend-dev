import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useUser } from '../hooks/useUser';
import {  useNavigate } from 'react-router-dom';
import { userFormSchema, type UserForm } from '../schemas/user';

const RegisterForm = () => {

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
          <label htmlFor="age">Edad</label>
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
  )
}

export default RegisterForm
