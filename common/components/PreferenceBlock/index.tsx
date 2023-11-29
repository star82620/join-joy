import React, { Children, ReactNode } from "react";

export type PreferenceBlockProps = { children: ReactNode; isActive: boolean };

export default function PreferenceBlock({
  children,
  isActive,
}: PreferenceBlockProps) {
  const defaultStyle =
    "bg-gray-200 border-gray-400 text-gray-400 shadow-gray-500";
  const activeStyle =
    "border-gray-950 text-gray-950 bg-yellow-neutral shadow-gray-950";
  const blockStyle = !isActive ? defaultStyle : activeStyle;

  return (
    <div
      className={`flex justify-center items-center w-20 h-12 font-semibold rounded shadow-btn border-2 ${blockStyle}`}
    >
      {children}
    </div>
  );
}
