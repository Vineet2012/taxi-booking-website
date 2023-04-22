import React from "react";
import "./allFleetCSS.css";

export default function LuxuryCmp() {
  return (
    <div className="all-fleet-wrapper">
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Luxury/_0000_audi_a8.jpg"
          />
        </div>
        <span className="span">Audi A-8</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Luxury/_0001_audi_a6.jpg"
          />
        </div>
        <span className="span">Audi A-6</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Luxury/_0023_Mercedes-BMW-5-Series.png"
          />
        </div>
        <span className="span">BMW 5 Series</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Luxury/_0021_Mercedes-E-Class.png"
          />
        </div>
        <span className="span">Mercedes E Class</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Luxury/_0020_Mercedes-S-Series.png"
          />
        </div>
        <span className="span">Mercedes S Class</span>
      </div>
    </div>
  );
}
