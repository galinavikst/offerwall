import {} from "react";

export interface INavItem {
  id: string;
  isActive: boolean;
  title: string;
  component: () => JSX.Element;
}

export interface IBook {
  title: string;
  id: number;
  price: number;
  imgSrc: string;
}

export interface ISocial {
  imgSrc: string;
  linkTo: string;
  id: string;
}
