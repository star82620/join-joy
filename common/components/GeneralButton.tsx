import React, { Children, ReactNode } from "react";

// 執行此元件 function：給予對應的 props（type、text、callback function），輸出結果為 button

interface Props {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function GeneralButton({
  type,
  children,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      className="border border-gray-950 shadow-button px-4 py-3"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
