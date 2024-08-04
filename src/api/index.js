import axios from "axios";
import { getCookie } from "cookies-next";

let token = "";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAxiosInstance = async () => {
  try {
    token = getCookie("USER_ACCESS_TOKEN");
  } catch (e) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,

      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    instance.interceptors.request.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    return instance;
  }
};
