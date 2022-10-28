import React from "react";
import ig from "../../assets/ig.png";

import "./footer.css";

const Footer = () => {
  return (
    <div id="footer__container">
      <hr id="rule"/>
      <div id="footer">
        <p id ='footer__img'>
      
          <p className="zuri__logo"> Zuri </p>
          <p className="footer-dot"></p>
          <p className="zuri__logo">Internship</p>
        </p>
        <p id="footer__text">HNG Internship 9 Frontend Task</p>
        <p id ='footer__img'>
          <img src={ig} alt="ingressive-logo" id="ing__logo" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
