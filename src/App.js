import './App.css';
import { Route, Routes } from "react-router-dom"
import { Landing } from './pages/landing';
import { Homepage } from './pages/homepage';
import { Clock } from './pages/clock';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = '/' element = { <Landing/>} />
      <Route path = '/homepage' element = { <Homepage/>} />
      <Route path = '/clock/:taskID' element = { <Clock/>} />
      </Routes>
    </div>
  );
}

export default App;
