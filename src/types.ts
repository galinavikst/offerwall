import {} from "react";

export interface INavItem {
  id: string;
  isActive: boolean;
  title: string;
}

export interface IBook {
  title: string;
  id: number;
  price: number;
  imgSrc: string;
  quantity?: number;
}

export interface ISocial {
  imgSrc: string;
  linkTo: string;
  id: string;
}

export interface IPayment {
  id: string;
  imgSrc: string;
}

export interface IOption {
  value: string;
  label: string;
}
