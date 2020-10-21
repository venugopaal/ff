import React, { useState, useEffect } from "react";

import "./productDetails.css";
let details = [];
export default function ProductDetails() {
  // Declare a new state variable, which we'll call "count"
  const [details, setDetails] = useState([1, 2]);
  const [once, setOnce] = useState([1, 2]);

  useEffect(() => {
    let staticDetails = [
      { key: "Type", value: "Seeds" },
      { key: "Year", value: "2011" }
    ];
    setDetails([
      { key: "Type", value: "Seeds" },
      { key: "Year", value: "2011" },
      { key: "Min", value: "1000KG" }
    ]);
    console.log("useeffect called...");
  }, [once]);
  return (
    <div className="price-component">
      <div className="row">
        <h5>Details</h5>
      </div>
      <div className="row">
        {details.length
          ? details.map(detail => {
              return (
                <div class="flex-container">
                  <div class="flex-container">
                    <div>
                      <p>{detail.key}</p>
                      <p>{detail.value}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
