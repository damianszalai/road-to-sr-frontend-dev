
import { Link} from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div>
      <h1>Formulario de registro</h1>
     <RegisterForm/>
      <p>
        ¿Ya tienes una cuenta? <Link to="/profile">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;
