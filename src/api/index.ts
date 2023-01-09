import axios from "axios";
import { mainModule } from "process";
import { AuthService } from "../redux/service/auth/auth.service";

// export const DEV_API = "https://165.22.199.16/";
export const DEV_API = "http://localhost:3000/";
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

// export const $imageApi = "https://adu24file.ams3.digitaloceanspaces.com";
