import React from "react";
import "./navBar.css";

export default function NavBarCmp() {
  return (
    <div className="navbar-wrapper">
      <img
        className="image"
        src="https://img.freepik.com/free-vector/taxi-poster-with-realistic-yellow-public-service-car-with-reflection_1284-5444.jpg"
      />
      <div className="links-wrapper">
        <svg
          style={{ cursor: "pointer", marginLeft: "40px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <a className="link" href="">
          ABOUT
        </a>
        <a className="link" href="">
          OUR SERVICES
        </a>
        <a className="link" href="">
          CONTACT US
        </a>
        <a className="link" href="">
          WHY CHOOSE US
        </a>
        <a className="link" href="">
          BLOGS
        </a>
      </div>
    </div>
  );
}
