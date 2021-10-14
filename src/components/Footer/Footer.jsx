import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <small>CANCLE</small>

        <div className="pre-button-div">
          <button className="pre-button ">PRE</button>
        </div>
        <div>
          <button className="next-button">NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
