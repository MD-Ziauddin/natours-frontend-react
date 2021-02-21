import React, { useContext, useState } from "react";
import { AxiosApi } from "../AxiosApi";
import { Context } from "../context/State";

export const Account = () => {
  const url = `http://localhost:5000`;
  const { user, addUser } = useContext(Context);

  const [value, setValue] = useState({
    name: user?.name,
    email: user?.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  async function fetchdata(route) {
    let data = {};
    if (route === "updateMe") {
      data = {
        name: value.name,
        email: value.email,
      };
    } else if (route === "updateMyPassword") {
      data = {
        passwordCurrent: value.currentPassword,
        password: value.newPassword,
        passwordConfirm: value.confirmPassword,
      };
    }
    try {
      const response = await AxiosApi({
        url: `/api/v1/users/${route}`,
        method: "patch",
        data,
      });
      addUser(response.data.data.user);
      alert("Update successful");
    } catch (err) {
      alert("Something went wrong!!! Contact Admin");
      console.log(err);
    }
  }

  const updateAccount = (e) => {
    e.preventDefault();
    fetchdata("updateMe");
  };

  const changePasswordsSubmit = (e) => {
    e.preventDefault();
    fetchdata("updateMyPassword");
  };

  const changeName = (e) => {
    e.preventDefault();
    setValue({ ...value, name: e.target.value });
  };

  const changeEmail = (e) => {
    e.preventDefault();
    setValue({ ...value, email: e.target.value });
  };

  const changeCurrentPassword = (e) => {
    e.preventDefault();
    setValue({ ...value, currentPassword: e.target.value });
  };

  const changePassword = (e) => {
    e.preventDefault();
    setValue({ ...value, newPassword: e.target.value });
  };

  const changeConfirmPassword = (e) => {
    e.preventDefault();
    setValue({ ...value, confirmPassword: e.target.value });
  };

  return (
    <div>
      <main class="main">
        <div class="user-view">
          <nav class="user-view__menu">
            <ul class="side-nav">
              <li class="side-nav--active">
                <a href="#">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-settings"></use> */}
                  </svg>
                  Settings
                </a>
              </li>
              <li>
                <a href="/my-tours">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                  </svg>
                  My bookings
                </a>
              </li>
              <li>
                <a href="#">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                  </svg>
                  My reviews
                </a>
              </li>
              <li>
                <a href="#">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-credit-card"></use> */}
                  </svg>
                  Billing
                </a>
              </li>
            </ul>

            {user?.role === "admin" ? (
              <div className="admin-nav">
                <h5 className="admin-nav__heading">Admin</h5>
                <ul class="side-nav">
                  <li class="side-nav--active">
                    <a href="#">
                      <svg>
                        {/* <use xlink:href="img/icons.svg#icon-settings"></use> */}
                      </svg>
                      Manage tours
                    </a>
                  </li>
                  <li>
                    <a href="/my-tours">
                      <svg>
                        {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                      </svg>
                      Manage users
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg>
                        {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                      </svg>
                      Manage Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg>
                        {/* <use xlink:href="img/icons.svg#icon-credit-card"></use> */}
                      </svg>
                      Manage Bookings
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </nav>
          <div class="user-view__content">
            <div class="user-view__form-container">
              <h2 class="heading-secondary ma-bt-md">Your account settings</h2>
              <form class="form form-user-data" onSubmit={updateAccount}>
                <div class="form__group">
                  <label class="form__label" for="name">
                    Name
                  </label>
                  <input
                    class="form__input"
                    id="name"
                    type="text"
                    value={value.name}
                    onChange={changeName}
                    required
                    name="name"
                  />
                </div>
                <div class="form__group ma-bt-md">
                  <label class="form__label" for="email">
                    Email address
                  </label>
                  <input
                    class="form__input"
                    id="email"
                    type="email"
                    value={value.email}
                    onChange={changeEmail}
                    required
                    name="email"
                  />
                </div>
                <div class="form__group form__photo-upload">
                  <img
                    class="form__user-photo"
                    src={`${url}/img/users/user-17.jpg`}
                    alt="User photo"
                  />
                  <input
                    class="form__upload"
                    type="file"
                    accept="image/*"
                    id="photo"
                    name="photo"
                  />
                  <label for="photo">Choose new photo</label>
                </div>
                <div class="form__group right">
                  <button class="btn btn--small btn--green" type="submit">
                    Save settings
                  </button>
                </div>
              </form>
            </div>
            <div class="line">&nbsp;</div>
            <div class="user-view__form-container">
              <h2 class="heading-secondary ma-bt-md">Password change</h2>
              <form
                class="form form-user-password"
                onSubmit={changePasswordsSubmit}
              >
                <div class="form__group">
                  <label class="form__label" for="password-current">
                    Current password
                  </label>
                  <input
                    class="form__input"
                    id="password-current"
                    type="password"
                    placeholder="••••••••"
                    value={value.currentPassword}
                    onChange={changeCurrentPassword}
                    required
                    minlength="8"
                  />
                </div>
                <div class="form__group">
                  <label class="form__label" for="password">
                    New password
                  </label>
                  <input
                    class="form__input"
                    id="password"
                    type="password"
                    value={value.newPassword}
                    onChange={changePassword}
                    placeholder="••••••••"
                    required
                    minlength="8"
                  />
                </div>
                <div class="form__group ma-bt-lg">
                  <label class="form__label" for="password-confirm">
                    Confirm password
                  </label>
                  <input
                    class="form__input"
                    id="password-confirm"
                    type="password"
                    value={value.confirmPassword}
                    onChange={changeConfirmPassword}
                    placeholder="••••••••"
                    required
                    minlength="8"
                  />
                </div>
                <div class="form__group right">
                  <button
                    class="btn btn--small btn--green btn--save-password"
                    onSubmit={changePasswordsSubmit}
                  >
                    Save password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
