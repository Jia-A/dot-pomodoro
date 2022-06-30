import './App.css';
import { Login } from './pages/login';
import { Route, Routes } from "react-router-dom"
import { Signup } from './pages/signup';
import { Landing } from './pages/landing';
import { Homepage } from './pages/homepage';
import { Clock } from './pages/clock';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = '/' element = { <Landing/>} />
      <Route path = '/homepage' element = { <Homepage/>} />
      <Route path = "/login" element = { <Login/> } />
      <Route path = '/signup' element = { <Signup/>} />
      {/* <Route path = '/clock' element = { <Clock/>} /> */}
      <Route path = '/clock/:taskID' element = { <Clock/>} />
      </Routes>
    </div>
  );
}

export default App;
