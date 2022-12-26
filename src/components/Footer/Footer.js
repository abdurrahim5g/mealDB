import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <p style={{ fontSize: "20px" }}>
            &copy; Copyright {new Date().getFullYear()} The Meal. All Right
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
