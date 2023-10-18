import React, { Children, ReactNode } from "react";
import clsx from "clsx";
import { PropsType, dataSet } from "./data";

// 執行此元件 function：給予對應的 props（type、text、callback function），輸出結果為 button
// 需要判斷的東西：樣式顏色（目前有三種：白黃橘）、按鈕 type、callbackFunction、按鈕內容

export default function GeneralButton({
  type,
  children,
  onClick,
  isDisabled,
  appearance,
  className,
}: PropsType) {
  const defaultStyle = styleSet[appearance].default;
  const hoverStyle = styleSet[appearance].hover;
  const activeStyle = styleSet[appearance].active;
  const disabledStyle = styleSet[appearance].disabled;

  return (
    <button
      className={clsx(
        "border-2 border-gray-950 shadow-btn",
        "px-3 py-2 h-fit",
        defaultStyle,
        hoverStyle,
        activeStyle,
        isDisabled ? disabledStyle : "",
        "active:shadow-none active:translate-x-0.5 active:translate-y-0.5",
        className
      )}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}