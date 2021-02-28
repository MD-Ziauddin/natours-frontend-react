import axios from "axios";

export const AxiosApi = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://lit-dusk-67856.herokuapp.com/",
  withCredentials: true,
  credentials: "same-origin",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type: Accept",
  },
});
