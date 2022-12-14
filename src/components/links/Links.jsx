import React from "react";
import "./links.css";
import { FaGithub } from "react-icons/fa";
import Slack from "../../assets/slack.png";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div id="links-container">
      <a
        href="https://twitter.com/ibrahimsannu"
        target="_blank"
        rel="noreferrer"
        id="btn__twitter"
      >
        Twitter Link
      </a>

      <a
        href="https://training.zuri.team/"
        target="_blank"
        rel="noreferrer"
        id="btn__zuri"
      >
        Zuri Team
      </a>

      <a
        href="http://books.zuri.team/"
        target="_blank"
        rel="noreferrer"
        class="dropdown"
        id="books"
      >
        Zuri Books
        <div class="dropdown-content">
          <h2>Zuri Books</h2>
          <p> This is where you find books about design and coding</p>
        </div>
      </a>

      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<Ojay>"
        target="_blank"
        rel="noreferrer"
        class="dropdown"
        id="book__python"
      >
        Python Books
        <div class="dropdown-content">
          <p>
            {" "}
            This is where you can find the best books. It shows you how to build
            the technical skills and confidence you need in your career.
          </p>
        </div>
      </a>

      <a
        href="https://backgroundcheck.zuri.team/"
        target="_blank"
        rel="noreferrer"
        class="dropdown"
        id="pitch"
      >
        Background Check for Coders
        <div class="dropdown-content">
          <p>
            {" "}
            This is where you can pitch a service for doing background checks on
            coders. <b>Act Now! Limited checks.</b>
          </p>
        </div>
      </a>

      <a
        href="https://books.zuri.team/design-rules"
        target="_blank"
        rel="noreferrer"
        class="dropdown"
        id="book__design"
      >
        Design Books
        <div class="dropdown-content">
          <p>
            {" "}
            This is where you can pitch the free design book offered by Zuri
          </p>
        </div>
      </a>

      <Link to="/contact" id="contact">
        <div>
          <p>Contact Me</p>
        </div>
      </Link>

      <div id="links__icons">
        <a
          href="https://slack.com/prince.ibrahim76@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <div>
            <img src={Slack} alt="" id="slack__logo" />
          </div>
        </a>
        <a href="https://github.com/sir-ojay" target="_blank" rel="noreferrer">
          {" "}
          <div>
            <FaGithub id="github" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Links;
