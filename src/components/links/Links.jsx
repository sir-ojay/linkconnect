import React from "react";
import "./links.css";
import { FaGithub, FaSlack } from "react-icons/fa";

const Links = () => {
  return (
    <div id="links-container">
      <button id="btn__twitter">
        <a href="https://twitter.com/ibrahimsannu">Twitter Link</a>
      </button>
      <butto id="btn__zuri">
        <a href="https://training.zuri.team/">Zuri Team</a>
      </butto>
      <button id="books">
        <a href="http://books.zuri.team/">Zuri Books</a>
      </button>
      <button id="book__python">
        <a href="https://books.zuri.team/">Python Books</a>
      </button>
      <button id="pitch">
        <a href="https://background.zuri.team/">Background Check for Coders</a>
      </button>
      <button id="book__design">
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </button>
      <div id="links__icons">
        <FaSlack /> <FaGithub />
      </div>
    </div>
  );
};

export default Links;
