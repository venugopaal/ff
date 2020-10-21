import React, { useState } from "react";

import "./sellerDetails.css";
export default function SellerDetails() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="price-component">
      <div className="row">
        <h6>Seller Details</h6>
      </div>
      <div className="row price-row">
        <span className="price-text">Name: </span>&nbsp;
        <span className="price-text">R.Venugopal</span>
      </div>
      <div className="row">
        <span className="price-text">Mobile: </span>&nbsp;
        <span className="price-text">9000321992</span>
      </div>
      <span className="published-date">today</span>
    </div>
  );
}
