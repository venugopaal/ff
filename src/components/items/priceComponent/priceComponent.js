import React, { useState } from "react";

import "./priceComponent.css";
export default function PriceComponent() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="price-component">
      <div className="row price-row">
        <span className="price-text">Price: </span>&nbsp;
        <span className="price">24,000</span>
      </div>
      <div className="row">
        <address className="address">vissannapeta,Krishna dist</address>
      </div>
      <span className="published-date">today</span>
    </div>
  );
}
