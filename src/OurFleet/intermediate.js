import React from "react";
import "./allFleetCSS.css";

export default function IntermediateCmp() {
  return (
    <div className="all-fleet-wrapper">
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Intermediate/_0027_Maruti-Dzire.png"
          />
        </div>
        <span className="span">Suzuki Swift Dzire</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Intermediate/_0002_Toyota-Etios.png"
          />
        </div>
        <span className="span">Toyota Etios</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Intermediate/_0013_Ford_Aspire.jpg"
          />
        </div>
        <span className="span">Ford Aspire</span>
      </div>
    </div>
  );
}
