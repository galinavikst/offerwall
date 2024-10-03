import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import { IBook, INavItem, ISocial } from "./types";

import domSvg from "./assets/icons/dom.svg";
import arcaSvg from "./assets/icons/arca.svg";
import bolsaSvg from "./assets/icons/bolsa.svg";
import cidadeSvg from "./assets/icons/cidade.svg";
import horaSvg from "./assets/icons/hora.svg";
import macunaSvg from "./assets/icons/macuna.svg";
import meninoSvg from "./assets/icons/menino.svg";
import powerSvg from "./assets/icons/power.svg";
import fbSvg from "./assets/icons/fb.svg";
import instaSvg from "./assets/icons/insta.svg";
import twitSvg from "./assets/icons/twit.svg";
import pintSvg from "./assets/icons/pint.svg";

export const NAV: INavItem[] = [
  {
    title: "Home",
    id: "home",
    isActive: false,
    component: Home,
  },
  {
    title: "Shop",
    id: "shop",
    isActive: true,
    component: Shop,
  },
  {
    title: "About",
    id: "about",
    isActive: false,
    component: About,
  },
  {
    title: "Contact",
    id: "contact",
    isActive: false,
    component: Contact,
  },
  {
    title: "Shopping Cart", // keep cart the last one obj
    id: "cart",
    isActive: false,
    component: Cart,
  },
];

export const BOOKS: IBook[] = [
  {
    title: "“Dom Casmurro”",
    id: 1,
    price: 50,
    imgSrc: domSvg,
  },
  {
    title: "“The Power of Habit”",
    id: 2,
    price: 60,
    imgSrc: powerSvg,
  },
  {
    title: "“O Menino Maluquinho”",
    id: 3,
    price: 70,
    imgSrc: meninoSvg,
  },
  {
    title: "“A Hora da Estrela”",
    id: 4,
    price: 30,
    imgSrc: horaSvg,
  },
  {
    title: "“Cidade de Deus”",
    id: 5,
    price: 90,
    imgSrc: cidadeSvg,
  },
  {
    title: "“Macunaíma”",
    id: 6,
    price: 45,
    imgSrc: macunaSvg,
  },
  {
    title: "“A Bolsa Amarela”",
    id: 7,
    price: 50,
    imgSrc: bolsaSvg,
  },
  {
    title: "“A Arca de Noé”",
    id: 8,
    price: 85,
    imgSrc: arcaSvg,
  },
];

export const SOCIAL: ISocial[] = [
  {
    imgSrc: fbSvg,
    linkTo: "#",
    id: "facebook",
  },
  {
    imgSrc: instaSvg,
    linkTo: "#",
    id: "instagram",
  },
  {
    imgSrc: twitSvg,
    linkTo: "#",
    id: "twitter",
  },
  {
    imgSrc: pintSvg,
    linkTo: "#",
    id: "pinterest",
  },
];
