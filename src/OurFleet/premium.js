import React from "react";
import "./allFleetCSS.css";

export default function PremiumCmp() {
  return (
    <div className="all-fleet-wrapper">
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Premium/_0022_Mercedes-C-Class.png"
          />
        </div>
        <span className="span">Mercedes C Class</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Premium/_0000_audi-a4.png"
          />
        </div>
        <span className="span">Audi A-4</span>
      </div>

      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Premium/_0003_honda_accord.jpg"
          />
        </div>
        <span className="span">Honda Accord</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Premium/_0002_bmw_3_series.jpg"
          />
        </div>
        <span className="span">BMW 3 Series</span>
      </div>
      <div className="image-text-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.carzonrent.com/images/ourfleet/Premium/_0012_Innova%20crystag4.jpg"
          />
        </div>
        <span className="span">Innova Crysta G4</span>
      </div>
    </div>
  );
}
