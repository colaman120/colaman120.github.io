import './App.css';
import Navbar from './Navbar.js';
import About from './pages/about.js';
import Food from './pages/food.js';
import Media from './pages/media.js';
import Home from './pages/home.js';
import { Route, Routes } from "react-router-dom";

function App() {  
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
