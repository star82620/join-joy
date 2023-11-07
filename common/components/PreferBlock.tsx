import React from "react";

type Props = {
  isActive: boolean;
  content: string;
};

export default function PreferBlock({ isActive, content }: Props) {
  const defaultStyle =
    "border-gray-400 bg-gray-200 shadow-prefer text-gray-400";
  const activeStyle =
    "border-gray-950 bg-yellow-neutral shadow-prefer-active text-gray-950";
  const style = isActive ? activeStyle : defaultStyle;

  return (
    <div>
      <p
        className={`w-20 h-[52px] flex justify-center items-center font-semibold rounded border-2 ${style}`}
      >
        {content}
      </p>
    </div>
  );
}
