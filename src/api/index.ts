import axios from "axios";
import { mainModule } from "process";
import { AuthService } from "../redux/service/auth/auth.service";

export const DEV_API = "https://api.avtolike.kz/";
// export const DEV_API = "http://localhost:3000/";
// export const PROD_API = "https://";

export const $api = axios.create({
  baseURL: DEV_API,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
});

export const $image_api = "https://autolike.ams3.digitaloceanspaces.com/";
