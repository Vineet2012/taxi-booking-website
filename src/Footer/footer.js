import React from "react";
import "./footer.css";

export default function FooterCmp() {
  return (
    <div className="footer-wrapper">
      <div className="heading">
        <span>SPEEDO</span>
      </div>
      <div className="company-wrapper">
        <span className="head">Company</span>
        <span className="span">About Speedo</span>
        <span className="span">Investor</span>
        <span className="span">Career</span>
        <span className="span">Faq's</span>
        <span className="span">Contact us</span>
        <span className="span">News</span>
      </div>
      <div className="privacy-wrapper">
        <span className="head">Privacy & Terms</span>
        <span className="span">Privacy Policy</span>
        <span className="span">Terms & Condition</span>
      </div>
      <div className="quick-link-wrapper">
        <span className="head">Quick Links</span>
        <span className="span">Site Map</span>
        <span className="span">Speedo Blogs</span>
        <span className="span">Book OutStation Cab</span>
      </div>
    </div>
  );
}
