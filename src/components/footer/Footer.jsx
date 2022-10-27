import React from "react";
import ig from "../../assets/ig.png";
import zuri from "../../assets/zurilogo.png";
import dot from "../../assets/dot.png";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer__container">
      <hr id="rule"/>
      <div id="footer">
        <p id ='footer__img'>
          <img src={zuri} alt="zuri-logo" id="zuri__logo"/>{" "}
          <span id="dot">
            <img src={dot} alt="dot" />
          </span>
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
