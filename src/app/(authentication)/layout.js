import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full h-[calc(100vh-80px)]">
      <div className="container h-full">
        <div className="w-full h-full relative flex flex-col justify-center items-center max-w-[340px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
