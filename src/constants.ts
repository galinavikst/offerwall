import { IBook, INavItem, IOption, ISocial } from "./types";

import domImg from "./assets/dom.png";
import arcaImg from "./assets/arca.png";
import bolsaImg from "./assets/bolsa.png";
import cidadeImg from "./assets/cidade.png";
import horaImg from "./assets/hora.png";
import macunaImg from "./assets/macuna.png";
import meninoImg from "./assets/menino.png";
import powerImg from "./assets/power.png";
import fbSvg from "./assets/icons/fb.svg";
import instaSvg from "./assets/icons/insta.svg";
import twitSvg from "./assets/icons/twit.svg";
import pintSvg from "./assets/icons/pint.svg";
import masterSvg from "./assets/icons/master.svg";
import applePaySvg from "./assets/icons/apple-pay.svg";
import visaSvg from "./assets/icons/visa.svg";

export const REQUIRED: string = "This field is required.";
export const MONTHS: IOption[] = [
  {
    value: "0",
    label: "Month",
  },
  { value: "1", label: "Jan" },
  { value: "2", label: "Feb" },
  { value: "3", label: "Mar" },
  { value: "4", label: "Apr" },
  { value: "5", label: "May" },
  { value: "6", label: "Jun" },
  { value: "7", label: "Jul" },
  { value: "8", label: "Aug" },
  { value: "9", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

export const NAV: INavItem[] = [
  {
    title: "Home",
    id: "home",
    isActive: false,
  },
  {
    title: "Shop",
    id: "shop",
    isActive: true,
  },
  {
    title: "About",
    id: "about",
    isActive: false,
  },
  {
    title: "Contact",
    id: "contact",
    isActive: false,
  },
  {
    title: "Shopping Cart", // keep cart the last one obj
    id: "cart",
    isActive: false,
  },
];

export const BOOKS: IBook[] = [
  {
    title: "“Dom Casmurro”",
    id: 1,
    price: 50,
    imgSrc: domImg,
  },
  {
    title: "“The Power of Habit”",
    id: 2,
    price: 60,
    imgSrc: powerImg,
  },
  {
    title: "“O Menino Maluquinho”",
    id: 3,
    price: 70,
    imgSrc: meninoImg,
  },
  {
    title: "“A Hora da Estrela”",
    id: 4,
    price: 30,
    imgSrc: horaImg,
  },
  {
    title: "“Cidade de Deus”",
    id: 5,
    price: 90,
    imgSrc: cidadeImg,
  },
  {
    title: "“Macunaíma”",
    id: 6,
    price: 45,
    imgSrc: macunaImg,
  },
  {
    title: "“A Bolsa Amarela”",
    id: 7,
    price: 50,
    imgSrc: bolsaImg,
  },
  {
    title: "“A Arca de Noé”",
    id: 8,
    price: 85,
    imgSrc: arcaImg,
  },
];

export const SOCIAL: ISocial[] = [
  {
    imgSrc: fbSvg,
    linkTo: "#", // change with company social links
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

export const PAYMENT = [
  {
    id: "master",
    imgSrc: masterSvg,
  },
  {
    id: "apple",
    imgSrc: applePaySvg,
  },
  {
    id: "visa",
    imgSrc: visaSvg,
  },
];
