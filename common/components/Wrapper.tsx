import React, { Children, ReactNode } from "react";

type WrapperProps = {
  title: string;
  titleStyle?: string;
  children: ReactNode;
  contentStyle?: string;
  hideShadow?: boolean;
};

// FrameWindow 框框寬度是看內容的

export default function Wrapper({
  title,
  titleStyle,
  children,
  contentStyle,
  hideShadow,
}: WrapperProps) {
  return (
    <div
      className={`w-full rounded-t-lg ${!hideShadow ? "shadow-window" : ""}`}
    >
      <section className="flex justify-between items-center bg-yellow-neutral border-[3px] border-b-2 rounded-t-lg px-3 py-2 text-center">
        <div className="w-6 h-6 rounded-full bg-white"></div>
        <h2 className={`font-semibold text-xl ${titleStyle}`}>{title}</h2>
        <div className="w-6 h-6 rounded-full bg-white"></div>
      </section>
      <section
        className={`bg-yellow-dark border-[3px] border-t-0 ${contentStyle}`}
      >
        {children}
      </section>
    </div>
  );
}
