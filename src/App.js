import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {WaterBill,HouseBill,ElectricityBill} from './components';
import './App.css'
import image from './image.png'

function Home() {
  return (
    <div>
      <h3>Select the type of Bill</h3>
      <img src={image} alt="img" />;
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/water-bill">Water Bill</Link></li>
            <li><Link to="/electricity-bill">Electricity Bill</Link></li>
            <li><Link to="/house-bill">House Bill</Link></li>
          </ul>
        </nav>
        <div className="bill-container">
        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/water-bill" component={WaterBill} />
          <Route path="/electricity-bill" component={ElectricityBill} />
          <Route path="/house-bill" component={HouseBill} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;