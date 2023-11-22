import { MouseEventHandler, ReactNode } from "react";

export type ButtonType = {
  type: "button" | "submit" | "reset";
  appearance:
    | "orange"
    | "yellow"
    | "yellow-dark"
    | "white"
    | "white-gray"
    | "black"
    | "gray"
    | "brown";
  children: ReactNode;
  onClick?: MouseEventHandler | undefined;
  isDisabled?: boolean;
  rounded?: boolean;
  className?: string;
  form?: string;
  name?: string;
  value?: string;
};

// appearance 按鈕樣式
export const dataSet = {
  orange: {
    default: "bg-orange-second border-gray-950",
    hover: "hover:bg-orange-neutral",
    active: "active:bg-orange-second",
    disabled:
      "disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500 ",
    textColor: "text-gray-950",
  },
  yellow: {
    default: "bg-yellow-neutral",
    hover: "hover:bg-yellow-tone",
    active: "active:bg-yellow-neutral",
    disabled:
      "disabled:bg-gray-300  disabled:text-gray-500 disabled:border-gray-500 ",
    textColor: "text-gray-950",
  },
  "yellow-dark": {
    default: "bg-yellow-dark border-gray-500",
    hover: "hover:bg-white hover:text-gray-950 hover:border-gray-950",
    active: "active:bg-yellow-neutral",
    disabled:
      "disabled:bg-gray-300  disabled:text-gray-500 disabled:border-gray-500 ",
    textColor: "text-gray-500",
  },
  white: {
    default: "bg-white border-gray-950",
    hover: "hover:bg-gray-100",
    active: "active:bg-gray-200",
    disabled:
      "disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400",
    textColor: "text-gray-950",
  },
  "white-gray": {
    default: "bg-white border-gray-500",
    hover: "hover:bg-gray-100",
    active: "active:bg-gray-200",
    disabled:
      "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-400",
    textColor: "text-gray-500",
  },
  gray: {
    default: "bg-gray-100",
    hover: "hover:bg-gray-100",
    active: "active:bg-gray-100",
    disabled: "disabled:bg-gray-300",
    textColor: "text-gray-950",
  },
  black: {
    default: "bg-gray-950 border-gray-950",
    hover: "hover:bg-gray-800 hover:border-gray-800",
    active: "active:bg-gray-900 active:border-gray-900",
    disabled:
      "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-400",
    textColor: "text-gray-50",
  },
  brown: {
    default: "bg-brown-dark border-gray-50",
    hover: "hover:border-brown-light hover:text-brown-light",
    active:
      "active:bg-brown-light active:border-brown-light active:text-gray-50",
    disabled:
      "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-400",
    textColor: "text-gray-50",
  },
};
