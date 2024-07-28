import React from "react";
import Login from "../Login";
import { useAuthSwitcher } from "./useAuthSwitcher";
import SignUp from "../SignUp";
import ForgetPassword from "../ForgetPassword";
import AuthSwitch from "../AuthSwitch";

const views = {
  login: <Login />,
  sign_up: <SignUp />,
  forget_password: <ForgetPassword />,
};

const AuthSwitcher = ({ authView = "login" }) => {
  const { changeView, currentView } = useAuthSwitcher({ authView });

  return (
    <div className="w-full flex flex-col items-center bg-white max-w-[400px] p-[32px] rounded-md pointer-events-auto">
      <AuthSwitch changeView={changeView} activeTab={currentView} />
      {views[currentView]}
    </div>
  );
};

export default AuthSwitcher;
