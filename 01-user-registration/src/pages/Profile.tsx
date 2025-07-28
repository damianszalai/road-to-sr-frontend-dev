// 01-form-context/src/pages/Profile.tsx
import { useUser } from '../hooks/useUser';

const Profile = () => {
  const { userData } = useUser();

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
