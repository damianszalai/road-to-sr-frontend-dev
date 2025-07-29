// 04-auth-dashboard/src/App.tsx

import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hola Mundo!</h1>
      <Link to="/register">Registarse</Link>
    </div>
  );
}

export default App;
