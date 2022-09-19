import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
