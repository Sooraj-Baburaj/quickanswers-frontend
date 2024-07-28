import { googleAuth } from "../apis";

const useLogin = () => {
  const handleGoogleSuccess = (creds) => {
    console.log(creds, "cred");
    googleAuth(creds.credential).then((r) => {
      console.log(r, "res");
    });
  };
  return { handleGoogleSuccess };
};

export default useLogin;
