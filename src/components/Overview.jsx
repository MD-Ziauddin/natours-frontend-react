import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Context } from "../context/State";
import { Card } from "./Card";

function Overview() {
  const url = `http://localhost:5000/api/v1/tours`;

  const { addTours, tours } = useContext(Context);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios({
          method: "get",
          url,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type: Accept",
          },
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
          {tours.map((tour) => {
            return <Card tour={tour} key={tour._id} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Overview;
