import React, { Children, ReactNode } from "react";

type WrapperProps = {
  title: string;
  titleStyle: string;
  children: ReactNode;
};

// FrameWindow 框框寬度是看內容的

export default function Wrapper({ title, titleStyle, children }: WrapperProps) {
  return (
    <div className="m-auto w-fit rounded-t-lg shadow-window">
      <section className="flex justify-between items-center bg-yellow-neutral border-[3px] border-b-2 rounded-t-lg px-3 py-2 text-center">
        <div className="w-6 h-6 rounded-full bg-white"></div>
        <h2 className={titleStyle}>{title}</h2>
        <div className="w-6 h-6 rounded-full bg-white"></div>
      </section>
      <section className="bg-yellow-dark border-[3px] border-t-0 px-[100px] py-16 lg:px-14 lg:py-12 md:px-8 md:py-8 sm:px-4 sm:py-6">
        {children}
      </section>
    </div>
  );
}
