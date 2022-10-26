import React from "react";
import "./links.css";
import { FaGithub, FaSlack } from "react-icons/fa";

const Links = () => {
  return (
    <div id="links-container">
      <div id="btn__twitter">
        <a href="https://twitter.com/ibrahimsannu">Twitter Link</a>
      </div>
      <div id="btn__zuri">
        <a href="https://training.zuri.team/">Zuri Team</a>
      </div>
      <div id="books">
        <a href="http://books.zuri.team/">Zuri Books</a>
      </div>
      <div id="book__python">
        <a href="https://books.zuri.team/">Python Books</a>
      </div>
      <div id="pitch">
        <a href="https://background.zuri.team/">Background Check for Coders</a>
      </div>
      <div id="book__design">
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </div>
      <div id="links__icons">
        <FaSlack /> <FaGithub />
      </div>
    </div>
  );
};

export default Links;
