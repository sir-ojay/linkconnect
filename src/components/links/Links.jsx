import React from "react";
import "./links.css";
import { FaGithub, FaSlack } from "react-icons/fa";

const Links = () => {
  return (
    <div id="links-container">
      <button id="btn__twitter">
        <a
          href="https://twitter.com/ibrahimsannu"
          target="_blank"
          rel="noreferrer"
        >
          Twitter Link
        </a>
      </button>
      <button id="btn__zuri">
        <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
          Zuri Team
        </a>
      </button>

      <button class="dropdown" id="books">
        <a href="http://books.zuri.team/" target="_blank" rel="noreferrer">
          Zuri Books
        </a>
        <div class="dropdown-content">
          <h2>Zuri Books</h2>
          <p> This is where you find books about design and coding</p>
        </div>
      </button>
      <button class="dropdown" id="book__python">
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<Ojay>"
          target="_blank"
          rel="noreferrer"
        >
          Python Books
        </a>
        <div class="dropdown-content">
          <p>
            {" "}
            This is where you can find the best books. It shows you how to build
            the technical skills and confidence you need in your career.
          </p>
        </div>
      </button>
      <button class="dropdown" id="pitch">
        <a
          href="https://backgroundcheck.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Background Check for Coders
        </a>
        <div class="dropdown-content">
          <p>
            {" "}
            This is where you can pitch a service for doing background checks on
            coders. <b>Act Now! Limited checks.</b>
          </p>
        </div>
      </button>
      <button class="dropdown" id="book__design">
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noreferrer"
        >
          Design Books
        </a>
        <div class="dropdown-content">
          <p>
            {" "}
            This is where you can pitch the free design book offered by Zuri
          </p>
        </div>
      </button>
      <div id="links__icons">
        <a href="prince.ibrahim76@gmail.com" target="_blank" rel="noreferrer">
          {" "}
          <FaSlack id="link__icon" />
        </a>
        <a href="https://github.com/sir-ojay" target="_blank" rel="noreferrer">
          {" "}
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Links;
