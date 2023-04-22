import React, { useEffect } from "react";
import "./services.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesCmp() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-wrapper">
      <span className="heading">OUR SERVICES</span>
      <div className="services-div-wrapper">
        <div className="text-wrapper">
          <span className="head">Outstation Rides</span>
          <span className="para">
            Plan your outstation journey anywhere across 7000+ destinations.
          </span>
          <span className="para1">
            With a choice of cars from economy hatchbacks to sedans, from
            premium sedans to SUVs and luxury cars
          </span>
          <button className="button">Book Ride Now</button>
        </div>

        <img
          data-aos="fade-right"
          className="image"
          src="https://www.meru.in/assets/images/group-16370.webp"
        />
      </div>
      <div className="services-div-wrapper">
        <img
          data-aos="fade-right"
          className="image"
          src="https://www.meru.in/assets/images/Image-48.webp"
        />
        <div className="text-wrapper">
          <span className="head">Airport Rides</span>
          <span className="para1">
            Airport cab service is our forte! Our airport taxi service is
            operational at 5 major airports of India with dedicated airport taxi
            booking counters set up within the airport premises.
          </span>
          <button className="button">Book Ride Now</button>
        </div>
      </div>
      <div className="services-div-wrapper">
        <div className="text-wrapper">
          <span className="head">Rentals Rides</span>
          <span className="para1">
            For comfortable rides in Hatchbacks, Sedans and MUVs All city car
            rentals are equipped with water bottle, tissue box.
          </span>
          <button className="button">Book Ride Now</button>
        </div>
        <img
          data-aos="fade-right"
          className="image"
          src="https://www.meru.in/assets/images/suv.webp"
        />
      </div>
      <div className="services-best-div-wrapper">
        <span className="head-best">Your Comfort Ride</span>
        <span className="para-best">
          with a wide range of cabs to choose from
        </span>
        <span className="tag-best">COMFORT</span>
        <img
          data-aos="fade-right"
          className="image-best"
          src="https://www.meru.in/assets/images/Image-265.webp"
        />
        <div className="butt-text-wrapper">
          <span className="text">COMFORT</span>
          <button className="button-best">Book Now</button>
        </div>
      </div>
    </div>
  );
}
