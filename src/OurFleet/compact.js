import React from "react";
import "./allFleetCSS.css";

export default function CompactCmp() {
  return (
    <div className="all-fleet-wrapper">
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Standard/_0054_Honda-City.png"
          />
        </div>
        <span className="span">Honda City</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Standard/_0019_Nissan-SUNNY.png"
          />
        </div>
        <span className="span">Nisaan Sunny</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Standard/_0004_ciaz.jpg"
          />
        </div>
        <span className="span">Suzuki Claz</span>
      </div>
    </div>
  );
}
