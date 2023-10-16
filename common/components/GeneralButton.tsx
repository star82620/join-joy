import React, { Children, ReactNode } from "react";
import clsx from "clsx";

// 執行此元件 function：給予對應的 props（type、text、callback function），輸出結果為 button
// 需要判斷的東西：樣式顏色（目前有三種：白黃橘）、按鈕 type、callbackFunction、按鈕內容
// 有兩種 padding： Header 用（lg）px-4 py-3、一般用 px-2 py-3

interface Props {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  appearance: "orange" | "yellow" | "light";
  size?: "lg" | "";
}

const styleSet = {
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
    active: "bg-yellow-primary",
    disabled: "bg-gray-300",
  },
};

export default function GeneralButton({
  type,
  children,
  onClick,
  disabled,
  appearance,
  size,
}: Props) {
  const styleDefault = styleSet[appearance].default;
  const styleHover = `hover:${styleSet[appearance].hover}`;
  const styleActive = `active:${styleSet[appearance].active}`;
  const styleDisabled = `disabled:${styleSet[appearance].disabled}`;

  return (
    <button
      className={clsx(
        "border-2 border-gray-950 shadow-btn",
        size === "lg" ? "px-4 py-3" : "px-2 py-3",
        styleDefault,
        styleHover,
        styleActive,
        disabled ? styleDisabled : "",
        "active:shadow-none active:-mr-0.5 active:ml-0.5 active:mt-0.5 active:-mb-0.5"
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
