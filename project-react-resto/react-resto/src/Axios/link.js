import axios from "axios";

const url = "http://127.0.0.1:8000/api";
let token = sessionStorage.getItem("token");

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
