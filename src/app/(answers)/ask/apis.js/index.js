import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export const getQuestion = async () => {
  const uat = getCookie("USER_ACCESS_TOKEN", { cookies });

  return {};
};
