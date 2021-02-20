import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context/State";
import { Card } from "./Card";
import { AxiosApi } from "../AxiosApi";

function Overview() {
  const url = `http://localhost:5000`;

  const { addTours, tours } = useContext(Context);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await AxiosApi({
          url: "/api/v1/tours",
        });
        addTours(response.data.data.tours);
      } catch (err) {
        alert("Something went wrong!!! Contact Admin");
      }
    }
    fetchdata();
  }, []);

  return (
    <div>
      <main className="main">
        <div className="card-container">
          {tours?.map((tour) => {
            return <Card tour={tour} key={tour._id} url={url} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Overview;
