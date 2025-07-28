import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';

const Profile = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/register');
    }
  }, [userData, navigate]);

  return (
    <div>
      <h1>Perfil del usuario</h1>
      {userData?.username && <p>Bienvenido {userData.username}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
      {userData?.age && <p>Edad: {userData.age}</p>}
      {userData?.city && <p>Ciudad: {userData.city}</p>}
    </div>
  );
};

export default Profile;
