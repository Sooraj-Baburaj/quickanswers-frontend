import { getAxiosInstance } from "@/src/api";

export const googleAuth = async (token) => {
  try {
    const api = await getAxiosInstance();
    const response = await api.post("/users/google-auth", { token });
    return response;
  } catch (error) {
    return error.response;
  }
};
