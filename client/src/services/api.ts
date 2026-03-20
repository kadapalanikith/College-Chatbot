import axios from "axios";

const getBaseUrl = () => {
  let url = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  if (!url.endsWith("/api")) {
    url = url.endsWith("/") ? url.slice(0, -1) + "/api" : url + "/api";
  }
  return url;
};

const API = axios.create({
  baseURL: getBaseUrl(),
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default API;