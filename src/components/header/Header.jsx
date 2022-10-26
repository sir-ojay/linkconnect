import React from "react";
import avatar from "../../assets/avatar.jpg";
import web from "../../assets/web.png";
import mobile from "../../assets/mobile.png";
import "./header.css";

const Header = () => {
  return (
    <div id="profile__container">
      <div id="profile">
        <div>
          <img src={avatar} alt="avatar" id="profile__img" />
        </div>
        <p id="twitter">ibrahimsannu</p>
        <p id="slack">prince.ibrahim76@gmail.com</p>
      </div>
      <div id="bg__icon">
        <div id="web__img">
          {" "}
          <img src={web} alt="" id="web" />
        </div>
        <div id="mobile__img">
          {" "}
          <img src={mobile} alt="" id="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
