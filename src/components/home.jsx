import React from "react";
import image from '././image.png'
import electricity from '././electricity.jpg'
import water_bill from '././water_bill.jpg'
const Home = () => {
    return (
        <div className="container">
            <h2>Pay Utility Bills</h2>
            <img className="image2" src={water_bill} alt="water"/>;
            <img className="image1"  src={image} alt="img"/>;
                <img className="image3"  src={electricity} alt="electric"/>;
        </div>
      );
}

export default Home;