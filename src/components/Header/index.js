import React from "react";
import Logo from "../ui/Logo";
import HeaderMenu from "../HeaderMenu";
import AuthModal from "../Auth";

const Header = () => {
  return (
    <header className="min-h-[80px] flex items-center border-b border-b-secondary-border">
      <div className="container">
        <div className="w-full flex flex-wrap items-center">
          {/* logo */}
          <div className="w-auto">
            <Logo>Header</Logo>
          </div>

          {/* menu links */}
          <div className="w-auto ml-[55px]">
            <HeaderMenu />
          </div>

          {/* action buttons */}
          <AuthModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
