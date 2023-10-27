import React from "react";
import { ModalWrapperProps, layoutStyles } from "./data";

export default function ModalWrapper({
  title,
  children,
  layout,
}: ModalWrapperProps) {
  const { haveShadow, haveHeadDeco } = layoutStyles[layout];

  return (
    <div className={`w-full rounded-t-lg ${haveShadow ? "shadow-window" : ""}`}>
      <section className="flex justify-between items-center bg-yellow-neutral border-[3px] border-b-2 rounded-t-lg px-3 py-2 text-center">
        {haveHeadDeco && <div className="w-6 h-6 rounded-full bg-white"></div>}
        <h2 className="w-full text-center font-semibold text-xl md:text-lg">
          {title}
        </h2>
        {haveHeadDeco && <div className="w-6 h-6 rounded-full bg-white"></div>}
      </section>
      <section className="bg-yellow-dark border-[3px] border-t-0">
        {children}
      </section>
    </div>
  );
}
