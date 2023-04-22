import React, { useState } from "react";
import CompactCmp from "./compact";
import "./ourFleet.css";
import IntermediateCmp from "./intermediate";
import SuperiorCmp from "./Superior";
import LuxuryCmp from "./luxury";
import PremiumCmp from "./premium";

export default function OurFleetCmp() {
  const [choose, setChoose] = useState("Compact");

  return (
    <div>
      <span className="fleet-heading">OUR FLEET</span>
      <div className="button-wrapper">
        <button className="button" onClick={() => setChoose("Compact")}>
          Compact
        </button>
        <button className="button" onClick={() => setChoose("Intermediate")}>
          Intermediate
        </button>
        <button className="button" onClick={() => setChoose("Superior")}>
          Superior
        </button>
        <button className="button" onClick={() => setChoose("Luxury")}>
          Luxury
        </button>
        <button className="button" onClick={() => setChoose("Premium")}>
          Premium
        </button>
      </div>
      <div>
        {choose === "Compact" && <CompactCmp />}
        {choose === "Intermediate" && <IntermediateCmp />}
        {choose === "Superior" && <SuperiorCmp />}
        {choose === "Luxury" && <LuxuryCmp />}
        {choose === "Premium" && <PremiumCmp />}
      </div>
    </div>
  );
}
