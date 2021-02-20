import axios from "axios";

export const AxiosApi = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  withCredentials: true,
  credentials: "include",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type: Accept",
  },
});
