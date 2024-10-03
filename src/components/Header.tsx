import React from "react";
import Logo from "./Logo";
import cartSvg from "../assets/icons/cart.svg";
import { INavItem } from "../types";

interface IHeader {
  nav: INavItem[];
  setNav: (el: INavItem) => void;
}

const Header = ({ nav, setNav }: IHeader) => {
  return (
    <header className="bg-bg-dark text-white lg:py-8 py-2 px-14">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex gap-1 justify-between bg-white rounded-full">
          {nav &&
            nav.slice(0, -1).map((el) => (
              <button
                key={el.id}
                onClick={() => setNav(el)}
                className={`${
                  el.isActive ? "bg-accent-main text-bg-dark" : "text-black"
                } flex items-center justify-center font-medium rounded-full lg:p-3 p-1 w-20 text-center`}
              >
                {el.title}
              </button>
            ))}
        </nav>

        <div className="flex gap-2 items-center">
          <button className="md:hidden bg-white p-2 h-8 w-8 rounded-full flex flex-col gap-1">
            <span className="bg-bg-dark h-0.5 w-full"></span>
            <span className="bg-bg-dark h-0.5 w-full"></span>
            <span className="bg-bg-dark h-0.5 w-full"></span>
          </button>
          <button
            onClick={() => setNav(nav[nav.length - 1])}
            className={`${
              nav.find((el) => el.isActive)?.id === "cart"
                ? "shadow-md shadow-white scale-110"
                : ""
            }  bg-accent-main p-2 rounded-full w-fit`}
          >
            <img src={cartSvg} alt="cart" className="lg:w-6 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
