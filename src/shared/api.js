import axios from "axios";
import { getCookie } from "./cookie";


export const apis = axios.create({
  baseURL: "13.125.228.240", //운영 서버 주소
});


apis.interceptors.request.use(function (config) {
  const token = getCookie("token");
  config.headers["Content-Type"] = "application/json;charset=UTF-8; charset=UTF-8";
  config.headers.common["authorization"] = `Bearer ${token}`;
  return config;
});

