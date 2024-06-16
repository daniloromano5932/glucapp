import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Signup/>
        <UserProfile/>
      </header>
    </div>
  );
}

export default App;
