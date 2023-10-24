import { ReactNode } from "react";

export type ButtonType = {
  type: "button" | "submit" | "reset";
  appearance: "orange" | "yellow" | "light";
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
  isDisabled?: boolean;
  className?: string;
};

// appearance 按鈕樣式
export const dataSet = {
  orange: {
    default: "bg-orange-neutral",
    hover: "hover:bg-orange-tone",
    active: "active:bg-orange-tone",
    disabled: "disabled:bg-gray-300",
  },
  yellow: {
    default: "bg-yellow-neutral",
    hover: "hover:bg-yellow-neutral",
    active: "active:bg-yellow-neutral",
    disabled: "disabled:bg-gray-300",
  },
  light: {
    default: "bg-yellow-tint",
    hover: "hover:bg-orange-tint",
    active: "active:bg-yellow-primary",
    disabled: "disabled:bg-gray-300",
  },
};
