import React, { MouseEventHandler } from "react";

type Props = {
  id: number;
  content: string;
  onClick: MouseEventHandler;
  isActive: boolean;
};

export default function PreferenceBlock({
  id,
  content,
  onClick,
  isActive,
}: Props) {
  const defaultStyle =
    "border-gray-400 bg-gray-200 shadow-preference text-gray-400";
  const activeStyle =
    "border-gray-950 bg-yellow-neutral shadow-preference-active text-gray-950";
  const style = isActive ? activeStyle : defaultStyle;

  return (
    <div>
      <p
        className={`w-20 h-[52px] flex justify-center items-center font-semibold rounded border-2 ${style}`}
        data-id={id}
        onClick={onClick}
      >
        {content}
      </p>
    </div>
  );
}
