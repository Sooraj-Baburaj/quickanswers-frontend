import axios from "axios";

let token = "";

const BASE_URL = "http://localhost:5000/api";

export const getAxiosInstance = async () => {
  try {
    token = localStorage.getItem("USER_ACCESS_TOKEN");
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
