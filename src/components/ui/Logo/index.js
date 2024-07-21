import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="w-[192px] block">
      <span className="aspect-[192/30] relative flex">
        <Image src={"/images/logo.svg"} fill />
      </span>
    </Link>
  );
};

export default Logo;
