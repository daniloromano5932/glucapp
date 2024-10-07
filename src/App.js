import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import SpecificMEasurement from './Pages/SpecificMeasurement';

function App() {
  const type = [];

  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 16, background: 'aliceblue', padding: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/user">User Page</Link>
        <Link to={`/measurement/${type}`}>Specific Measurement</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/measurement' element={<SpecificMEasurement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
