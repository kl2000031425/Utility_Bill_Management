import React from "react";

const WaterBill=()=> {
  const billAmount = 1100;
  const billText = "Your water bill";
  const pay = () => {
    alert("Payment processed!");
  }

  return (
    <div className="container">
      <h2>Water Bill</h2>
      <p>{billText} is: ₹{billAmount}</p>
      <button className='button-85' onClick={pay}>Pay Now</button>
    </div>
  );
}

export default WaterBill;