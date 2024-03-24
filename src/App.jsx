import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {WaterBill,HouseBill,ElectricityBill} from './components';
import './App.css'
import Home from './components/home';



function App() {
  return (
    <Router>
      <div className="gradient_background">
        <nav className="navbar">
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/water-bill">Water Bill</Link></li>
            <li><Link to="/electricity-bill">Electricity Bill</Link></li>
            <li><Link to="/house-bill">House Bill</Link></li>
          </ul>
        </nav>
        
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/water-bill" element={<WaterBill />} />
          <Route path="/electricity-bill" element={<ElectricityBill />} />
          <Route path="/house-bill" element={<HouseBill />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;