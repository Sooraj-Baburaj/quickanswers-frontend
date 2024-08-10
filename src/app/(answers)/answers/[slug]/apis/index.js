import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAnswer = async (id) => {
  try {
    const USER_ACCESS_TOKEN = getCookie("USER_ACCESS_TOKEN", { cookies });
    const response = await fetch(`${BASE_URL}/answers/get/${id}`, {
      headers: { Authorization: `Bearer ${USER_ACCESS_TOKEN}` },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch the answer:", error);
    return null; // or throw the error to handle it in the calling function
  }
};
