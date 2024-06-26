import React from "react";

const HouseBill=()=> {
    const billAmount = 300;

    const pay = () => {
      alert("Payment processed!");
    }
    return (
      <div className="container">
        <h2>House Bill</h2>
        <p>Your bill amount is ₹{billAmount}</p>
        <button className='button-85' onClick={pay}>Pay Now</button>
      </div>
    );
  }

  export default  HouseBill;