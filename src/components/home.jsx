import React from "react";
import image from '././image.png'

const Home = () => {
    return (
        <div className="container">
            <h2>Pay Utility Bills</h2>
            <img src={image} alt="img" 
                style={{alignSelf:'center'}}
            />;
        </div>
      );
}

export default Home;