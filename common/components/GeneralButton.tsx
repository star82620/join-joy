import React, { Children, ReactNode } from "react";

// 執行此元件 function：給予對應的 props（type、text、callback function），輸出結果為 button
// 需要判斷的東西：樣式顏色（目前有三種：白黃橘）、按鈕 type、callbackFunction、按鈕內容

interface Props {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  appearance: "orange" | "yellow" | "light";
}

const styleColor = {
  orange: {
    default: "bg-orange-neutral",
    hover: "bg-orange-tone",
    active: "bg-orange-tone",
    disabled: " bg-gray-300",
  },
  yellow: {
    default: "bg-yellow-neutral",
    hover: "bg-yellow-neutral",
    active: "bg-yellow-neutral",
    disabled: " bg-gray-300",
  },
  light: {
    default: "bg-yellow-tint",
    hover: "bg-orange-tint",
    active: "bg-yellow-tint",
    disabled: "bg-gray-300",
  },
};

export default function GeneralButton({
  type,
  children,
  onClick,
  disabled,
  appearance,
}: Props) {
  const classes = [
    "border",
    "border-gray-950",
    "shadow-btn",
    "px-4",
    "py-3",
    styleColor[appearance].default,
    `hover:${styleColor[appearance].hover}`,
    `active:${styleColor[appearance].active}`,
    `disabled:${styleColor[appearance].disabled}`,
  ].join(" ");

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
