import React from "react";

import images from "../dev-data/img/new-tour-2.jpg";

export const Card = ({ tour }) => {
  return (
    <div>
      <div className="card">
        <div className="card__header">
          <div className="card__picture">
            <div className="card__picture-overlay">&nbsp;</div>
            <img
              src={images}
              alt={`${tour.name}`}
              className="card__picture-img"
            />
          </div>
          <h3 className="heading-tertirary">
            <span>{tour.name}</span>
          </h3>
        </div>

        <div class="card__details">
          <h4 class="card__sub-heading">{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
          <p class="card__text">{tour.summary}</p>
          <div class="card__data">
            <svg class="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
            </svg>
            <span>{tour.startLocation.description}</span>
          </div>
          <div class="card__data">
            <svg class="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
            </svg>
            <span>
              {new Date(tour.startDates[0]).toLocaleDateString("en-us", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div class="card__data">
            <svg class="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-flag"></use> */}
            </svg>
            <span>{`${tour.locations.length} stops`}</span>
          </div>
          <div class="card__data">
            <svg class="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
            </svg>
            <span>{`${tour.maxGroupSize} people`}</span>
          </div>
        </div>

        <div class="card__footer">
          <p>
            <span class="card__footer-value">$297</span>
            <span class="card__footer-text">per person</span>
          </p>
          <p class="card__ratings">
            <span class="card__footer-value">4.9</span>
            <span class="card__footer-text">rating (21)</span>
          </p>
          <a href="#" class="btn btn--green btn--small">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
