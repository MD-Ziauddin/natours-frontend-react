import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/State";

export const Tour = (props) => {
  // const id = this.props.match.params.id;
  const { id } = props.match.params;

  const url = `http://localhost:5000`;

  const { addTour, tour } = useContext(Context);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios({
          method: "get",
          baseURL: `${url}/api/v1/tours/${id}`,
          withCredentials: true,
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type: Accept",
          },
        });
        addTour(response.data.data.tour);
      } catch (err) {
        alert("Something went wrong!!! Contact Admin");
      }
    }
    fetchdata();
  }, []);

  console.log(tour.reviews);

  return (
    <div>
      <section class="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img src={`${url}/img/tours/${tour.imageCover}`} alt="Tour name" />
        </div>
        <div class="heading-box">
          <h1 class="heading-primary">
            <span>{tour.name} TOUR</span>
          </h1>
          <div class="heading-box__group">
            <div class="heading-box__detail">
              <svg class="heading-box__icon">
                {/* <use xlink:href="img/icons.svg#icon-clock"></use> */}
              </svg>
              <span class="heading-box__text">{tour.duration} days</span>
            </div>
            <div class="heading-box__detail">
              <svg class="heading-box__icon">
                {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
              </svg>
              <span class="heading-box__text">{`${tour.startLocation?.description}`}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section-description">
        <div class="overview-box">
          <div>
            <div class="overview-box__group">
              <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
              <div class="overview-box__detail">
                <svg class="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
                </svg>
                <span class="overview-box__label">Next date</span>
                <span class="overview-box__text">
                  {new Date(
                    tour.startDates?.map((el) => el)[0]
                  ).toLocaleDateString("en-us", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div class="overview-box__detail">
                <svg class="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-trending-up"></use> */}
                </svg>
                <span class="overview-box__label">Difficulty</span>
                <span class="overview-box__text">{tour.difficulty}</span>
              </div>
              <div class="overview-box__detail">
                <svg class="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
                </svg>
                <span class="overview-box__label">Participants</span>
                <span class="overview-box__text">
                  {tour.maxGroupSize} people
                </span>
              </div>
              <div class="overview-box__detail">
                <svg class="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                <span class="overview-box__label">Rating</span>
                <span class="overview-box__text">
                  {tour.ratingsAverage} / 5
                </span>
              </div>
            </div>

            <div class="overview-box__group">
              <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>

              {tour.guides?.map((guide) => (
                <div class="overview-box__detail">
                  <img
                    src={`${url}/img/users/${guide.photo}`}
                    alt="Lead guide"
                    class="overview-box__img"
                  />
                  <span class="overview-box__label">
                    {guide.role === "guide" ? "Tour-Guide" : "Lead-Guide"}
                  </span>
                  <span class="overview-box__text">{guide.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="description-box">
          <h2 class="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
          {tour.description?.split("\n").map((para) => (
            <div>
              <p class="description__text">{para}</p>
              <br />
            </div>
          ))}
          {/* <p class="description__text">{tour.description}</p> */}
        </div>
      </section>

      <section class="section-pictures">
        {tour.images?.map((img, i) => (
          <div class="picture-box" key={i}>
            <img
              class={`picture-box__img picture-box__img--${i + 1}`}
              src={`${url}/img/tours/${img}`}
              alt="The Park Camper Tour 1"
            />
          </div>
        ))}
      </section>

      {/* MAP */}

      <section class="section-reviews">
        <div class="reviews">
          {tour.reviews?.map((rev) => (
            <div class="reviews__card">
              <div class="reviews__avatar">
                <img
                  src={`${url}/img/users/${rev.user?.photo}`}
                  alt={`${url}/img/users/${rev.user?.name}`}
                  class="reviews__avatar-img"
                />
                <h6 class="reviews__user">{rev.user?.name}</h6>
              </div>
              <p class="reviews__text">{rev.review}</p>
              <div class="reviews__rating">
                <svg class="reviews__star reviews__star--active">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                <svg class="reviews__star reviews__star--active">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                <svg class="reviews__star reviews__star--active">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                <svg class="reviews__star reviews__star--active">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                <svg class="reviews__star reviews__star--active">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="section-cta">
        <div class="cta">
          <div class="cta__img cta__img--logo">
            <img
              src={`${url}/img/logo-white.png`}
              alt="Natours logo"
              class=""
            />
          </div>

          <img
            src={`${url}/img/tours/${tour.images?.map((img) => img)[0]}`}
            alt=""
            class="cta__img cta__img--1"
          />
          <img
            src={`${url}/img/tours/${tour.images?.map((img) => img)[1]}`}
            alt=""
            class="cta__img cta__img--2"
          />

          <div class="cta__content">
            <h2 class="heading-secondary">What are you waiting for?</h2>
            <p class="cta__text">
              {tour.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>
            <button class="btn btn--green span-all-rows">Book tour now!</button>
          </div>
        </div>
      </section>
    </div>
  );
};
