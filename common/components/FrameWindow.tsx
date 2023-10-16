import React, { Children, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

// window 寬度是看內容的

export default function FrameWindow({ title, children }: Props) {
  return (
    <div className="m-auto w-fit">
      <section className="flex justify-between items-center bg-yellow-second border-[3px] border-b-2 rounded-t-lg px-3 py-2 text-center">
        <div className="w-6 h-6 rounded-full bg-white"></div>
        {title}
        <div className="w-6 h-6 rounded-full bg-white"></div>
      </section>
      <section className="bg-yellow-dark border-[3px] border-t-0 rounded-b-lg px-[100px] py-16">
        {children}
      </section>
    </div>
  );
}
