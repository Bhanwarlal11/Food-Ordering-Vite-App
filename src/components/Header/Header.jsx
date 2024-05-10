import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a divese menu featuring a delectable array of dishes
          crafted with the finest ingredient and calinary expertise. Our mission 
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
};

export default Header;
