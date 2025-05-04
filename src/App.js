import './App.css';
import Navbar from './Navbar.js';
import About from './pages/about.js';
import Pricing from './pages/pricing.js';
import Home from './pages/home.js';
import { Route, Routes } from "react-router-dom";

function App() {  
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
