import React, { useContext, useState } from "react";
import { Context } from "../context/State";

export const Account = () => {
  const url = `http://localhost:5000`;
  const { user } = useContext(Context);

  const [value, setValue] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

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

            {user.role === "admin" ? (
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
              <form class="form form-user-data">
                <div class="form__group">
                  <label class="form__label" for="name">
                    Name
                  </label>
                  <input
                    class="form__input"
                    id="name"
                    type="text"
                    value={user.name}
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
                    value={user.email}
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
                  <button class="btn btn--small btn--green">
                    Save settings
                  </button>
                </div>
              </form>
            </div>
            <div class="line">&nbsp;</div>
            <div class="user-view__form-container">
              <h2 class="heading-secondary ma-bt-md">Password change</h2>
              <form class="form form-user-password">
                <div class="form__group">
                  <label class="form__label" for="password-current">
                    Current password
                  </label>
                  <input
                    class="form__input"
                    id="password-current"
                    type="password"
                    placeholder="••••••••"
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
                    placeholder="••••••••"
                    required
                    minlength="8"
                  />
                </div>
                <div class="form__group right">
                  <button class="btn btn--small btn--green btn--save-password">
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