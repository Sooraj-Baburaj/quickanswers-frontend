import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export const getQuestion = async (props) => {
  console.log(props, "prop");
  const uat = getCookie("USER_ACCESS_TOKEN", { cookies });

  return {};
};
