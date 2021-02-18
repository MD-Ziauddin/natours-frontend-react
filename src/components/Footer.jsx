import React from "react";

import Logo from "../assets/logo-green.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__logo">
          <img src={Logo} alt="Natour Logo" />
        </div>
        <ul className="footer__nav">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Download Apps</a>
          </li>
          <li>
            <a href="#">Become a guide</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        {/* <p className="footer__copyright"></p> */}
      </footer>
    </div>
  );
}

export default Footer;
