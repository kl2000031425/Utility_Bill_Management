import React from "react";

const ElectricityBill=()=> {
    // Replace with your electricity bill calculation logic
    const billAmount = 2000;
    const pay = () => {
      alert("Payment processed!");
    }
    return (
      <div>
        <h2>Electricity Bill</h2>
        <p>Your bill amount is ₹{billAmount}</p>
        <button className='button-85' onClick={pay}>Pay Now</button>
      </div>
    );
  }

export default ElectricityBill;