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
    <div className="App">
      <Link to="/"><Button variant="primary">Home</Button></Link>
      <Link to="/login"><Button variant="primary">Login</Button></Link>
      <Link to="/signup"><Button variant="primary">Signup</Button></Link>
      <Link to="/user"><Button variant="primary">User Page</Button></Link>
      <Link to={`/measurement/${type}`}><Button variant="primary">Specific Measurement</Button></Link>



    </div>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/user' element={<UserProfile/>} />
      <Route path='/measurement' element={<SpecificMEasurement/>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
