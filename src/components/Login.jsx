import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AxiosApi } from "../AxiosApi";
import { Context } from "../context/State";

export const Login = () => {
  const url = `http://localhost:5000`;

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const { addUser, user } = useContext(Context);
  const history = useHistory();

  // Submit to API
  async function fetchdata() {
    try {
      const response = await AxiosApi({
        url: "/api/v1/users/login",
        method: "post",
        data: {
          email: value.email,
          password: value.password,
        },
      });
      addUser(response.data.data.user);
      alert("Login Successful");
      setTimeout(() => {
        history.push("/");
      }, 100);
    } catch (err) {
      alert("Something went wrong!!! Contact Admin");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchdata();
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setValue({ ...value, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setValue({ ...value, password: e.target.value });
  };

  return (
    <div>
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label">
                Email Address
                <input
                  className="form__input"
                  id="email"
                  type="email"
                  //   placeholder="you@example.com"
                  value={value.email}
                  onChange={handleEmailChange}
                  required
                />
              </label>
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label">
                Password
                <input
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={value.password}
                  onChange={handlePasswordChange}
                  required
                  minlength="8"
                />
              </label>
            </div>
            <div className="form__group">
              <button className="btn btn--green" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
