import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo-white.png";

function Header() {
  const User = null;
  return (
    <div>
      <header className="header">
        <nav className="nav nav--tours">
          <Link to="/" className="nav__el">
            All tours
          </Link>
        </nav>

        <div className="header__logo">
          <img src={Logo} alt="Natours Logo" />
        </div>

        <nav className="nav nav--user">
          {User ? (
            <div>
              <a href="#" className="nav__el nav__el--logout">
                Log out
              </a>
              <a href="#" className="nav__el">
                <img src="#" alt="#" className="nav__user-img" />
                <span>user name</span>
              </a>
            </div>
          ) : (
            <div>
              <a href="#" className="nav__el">
                Log in
              </a>
              <a href="#" className="nav__el nav__el--cta">
                Sign up
              </a>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
