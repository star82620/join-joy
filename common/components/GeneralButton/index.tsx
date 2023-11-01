import React from "react";
import { ButtonType, dataSet } from "./data";

// 執行此元件 function：給予對應的 props（type、text、callback function），輸出結果為 button
// 需要判斷的東西：樣式顏色（目前有三種：白黃橘）、按鈕 type、callbackFunction、按鈕內容

export default function GeneralButton({
  type,
  appearance,
  children,
  onClick,
  isDisabled = false,
  wrapper = "square",
  className,
}: ButtonType) {
  const defaultColor = dataSet[appearance].default || null;
  const hoverColor = dataSet[appearance].hover || null;
  const activeColor = dataSet[appearance].active || null;
  const disabledColor = dataSet[appearance].disabled || null;
  const textColor = dataSet[appearance].textColor || null;
  const disabledStyle = isDisabled ? disabledColor : "";
  const roundedBtnStyle = "rounded text-sm";
  const squareBtnStyle =
    "shadow-btn text-xl md:text-xs active:shadow-none active:translate-x-0.5 active:translate-y-0.5";
  const isRounded = wrapper === "rounded";
  const btnStyle = isRounded ? roundedBtnStyle : squareBtnStyle;

  return (
    <button
      className={`border-2 border-gray-950 px-3 py-2 h-fit font-semibold
        ${btnStyle}
        ${textColor} ${defaultColor} ${hoverColor} ${activeColor} ${disabledStyle} 
        ${className}
        `}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
