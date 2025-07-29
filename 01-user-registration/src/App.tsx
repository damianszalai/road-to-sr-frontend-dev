// 01-user-registration/src/App.tsx
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <Link to="/register">Ir a registro</Link>
    </div>
  );
};

export default App;
