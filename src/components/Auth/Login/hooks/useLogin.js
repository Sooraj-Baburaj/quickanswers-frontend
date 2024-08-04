import { toast } from "sonner";
import { googleAuth } from "../apis";
import { setCookie } from "cookies-next";

const useLogin = () => {
  const handleGoogleSuccess = (creds) => {
    console.log(creds, "cred");
    googleAuth(creds.credential).then((r) => {
      if (r?.status === 200) {
        setCookie("USER_ACCESS_TOKEN", r?.data?.data?.user_access_token);
        toast.success("Logged In!");
      } else {
        toast.error("Login failed!");
      }
    });
  };
  return { handleGoogleSuccess };
};

export default useLogin;
