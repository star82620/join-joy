import React from "react";
import { ButtonType, dataSet } from "./data";

export default function GeneralButton({
  type,
  appearance,
  children,
  onClick,
  isDisabled,
  wrapper,
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
    "shadow-btn text-xl md:text-xs active:shadow-none active:translate-x-0.5 active:translate-y-0.5 disabled:shadow-none disabled:translate-x-0.5 disabled:translate-y-0.5";
  const isRounded = wrapper === "rounded";
  const btnStyle = isRounded ? roundedBtnStyle : squareBtnStyle;

  return (
    <button
      className={`border-2  px-3 py-2 h-fit font-semibold
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
