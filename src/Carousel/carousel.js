import React from "react";

export default function CarouselCmp() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            style={{ height: "89vh", objectFit: "cover" }}
            src="https://wallpapercosmos.com/w/full/c/a/8/1280116-3840x2160-desktop-4k-taxi-wallpaper-photo.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            style={{ height: "89vh", objectFit: "cover" }}
            src="https://s.abcnews.com/images/Business/nyc-taxis-gty-rc-200220_hpMain_16x9_1600.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            style={{ height: "89vh", objectFit: "cover" }}
            src="https://wallpapercave.com/wp/wp3097229.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
