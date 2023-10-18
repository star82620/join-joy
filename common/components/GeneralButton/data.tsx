import { ReactNode } from "react";

export type PropsType = {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isDisabled?: boolean;
  appearance: "orange" | "yellow" | "light";
  className?: string;
};

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