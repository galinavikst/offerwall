import { IBook, INavItem, IOption, ISocial } from "./types";

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

export const initValues: { [key: string]: string } = {
  clientName: "",
  cardNumber: "",
  month: "",
  year: "",
  code: "",
};

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
