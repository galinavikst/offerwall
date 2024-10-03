import React from "react";
import Logo from "./Logo";
import { SOCIAL } from "../constants";

import locationSvg from "../assets/icons/location.svg";
import phoneSvg from "../assets/icons/phone.svg";
import emailSvg from "../assets/icons/email.svg";

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-white px-14">
      <div className="max-w-7xl mx-auto py-7 lg:py-14 flex sm:flex-row flex-col gap-10 sm:justify-between justify-center">
        <div className="sm:w-full w-fit m-auto">
          <Logo />

          <ul className="flex gap-3 my-3">
            {SOCIAL.map((el) => (
              <li key={el.id}>
                <a href={el.linkTo} target="_blank">
                  <img
                    className="w-auto h-auto"
                    src={el.imgSrc}
                    alt={el.id}
                    title={"see company " + el.id}
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs sm:block hidden opacity-70">
            &copy;"LivroMundo" JSC, 2023 - 2024
          </p>
        </div>

        <div className="sm:w-full w-fit m-auto text-sm max-w-[290px]">
          <address className="not-italic flex items-center gap-8">
            <img
              className="w-auto h-auto"
              src={locationSvg}
              alt="location"
              title="company adress"
            />
            <span>Statensingel 52, 3039 LP Rotterdam, Netherlands</span>
          </address>
          <a href="tel:+31618426954" className="flex items-center gap-8">
            <img
              className="w-auto h-auto"
              src={phoneSvg}
              alt="phone"
              title="company phone"
            />
            <span>+31&nbsp;6&nbsp;18426954</span>
          </a>
          <a
            href="mailto:info@moviestore.nl"
            className="flex items-center gap-8"
          >
            <img
              className="w-auto h-auto"
              src={emailSvg}
              alt="email"
              title="company email"
            />
            <span>info@moviestore.nl</span>
          </a>
        </div>

        <p className="text-xs sm:hidden block opacity-70 text-center">
          &copy;"LivroMundo" JSC, 2023 - 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
