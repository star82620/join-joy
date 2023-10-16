import React, { Children, ReactNode } from "react";
import clsx from "clsx";

// 執行此元件 function：給予對應的 props（type、text、callback function），輸出結果為 button
// 需要判斷的東西：樣式顏色（目前有三種：白黃橘）、按鈕 type、callbackFunction、按鈕內容

interface Props {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  appearance: "orange" | "yellow" | "light";
}

const styleSet = {
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

export default function GeneralButton({
  type,
  children,
  onClick,
  disabled,
  appearance,
}: Props) {
  const defaultStyle = styleSet[appearance].default;
  const hoverStyle = styleSet[appearance].hover;
  const activeStyle = styleSet[appearance].active;
  const disabledStyle = styleSet[appearance].disabled;

  return (
    <button
      className={clsx(
        "border-2 border-gray-950 shadow-btn",
        "px-2 py-3",
        defaultStyle,
        hoverStyle,
        activeStyle,
        disabled ? disabledStyle : "",
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
