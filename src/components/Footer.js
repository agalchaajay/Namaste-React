import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item2">
          <span style={{ paddingRight: 5 }}>Copyright </span>

          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} AA. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
