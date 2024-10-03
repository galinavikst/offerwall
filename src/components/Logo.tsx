import React from "react";
import logoSvg from "../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center lg:gap-7 gap-1">
      <img src={logoSvg} alt="logo" className="w-10 lg:w-14" />
      <h1 className="font-bold lg:text-[34px]">LivroMundo</h1>
    </div>
  );
};

export default Logo;
