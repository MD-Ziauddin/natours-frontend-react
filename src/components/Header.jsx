import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo-white.png";
import { Context } from "../context/State";

function Header() {
  const url = "http://localhost:5000";

  const { user, removeUser } = useContext(Context);

  const logOut = async () => {
    try {
      const response = await axios({
        method: "get",
        baseURL: `${url}/api/v1/users/logout`,
        withCredentials: true,
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type: Accept",
        },
      });
      removeUser();
      alert("Log out successfully");
    } catch (err) {
      alert("Something went wrong!!! Contact Admin");
    }
  };

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
          {user ? (
            <>
              <button className="nav__el nav__el--logout" onClick={logOut}>
                Log out
              </button>
              {/* <a href="#" className="nav__el"> */}
              <Link to="/account" className="nav__el">
                <img
                  src={`${url}/img/users/user-17.jpg`}
                  alt="#"
                  className="nav__user-img"
                />
                <span>{user.name}</span>
              </Link>
              {/* </a> */}
            </>
          ) : (
            <>
              <Link to="/login" className="nav__el">
                Log in
              </Link>
              <a href="#" className="nav__el nav__el--cta">
                Sign up
              </a>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
