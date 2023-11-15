import { ReactNode } from "react";

export type ButtonType = {
  type: "button" | "submit" | "reset";
  appearance: "orange" | "yellow" | "white" | "black" | "gray";
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
  isDisabled?: boolean;
  rounded?: boolean;
  className?: string;
  form?: string;
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
};
