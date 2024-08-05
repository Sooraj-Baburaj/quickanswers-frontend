import { getAxiosInstance } from "@/src/api";

export const createQuestion = async (params) => {
  try {
    const api = await getAxiosInstance();
    const response = await api.post("/questions/upsert", params);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const findExistingQuestion = async (params) => {
  try {
    const api = await getAxiosInstance();
    const response = await api.post(
      "/questions/find-existing-question",
      params
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const searchQuestion = async (search, signal) => {
  try {
    const api = await getAxiosInstance();
    const response = await api.post(
      "/questions/search",
      { search },
      { signal }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
